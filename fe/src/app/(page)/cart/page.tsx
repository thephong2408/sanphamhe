"use client";
import React, { useState, useEffect, useMemo } from "react";
import LayoutCard from "@/app/Layouts/LayoutCard";
import classNames from "classnames";
import Link from "next/link";
import User from "./user";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/app/redux/slices/dataCart";
import useDispartData from "@/app/useDispartData";
import useDataCart from "@/app/useDataCart";
import { setDataCard } from "@/app/redux/slices/dataCard";

export default function Cart() {
  const dispatch = useDispatch();
  const Id = useSelector((state: any) => state.dataDispart.dataId);

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const { data, loading, error } = useDispartData();
  const [cartData, setCartData] = useState<any>([]);
  // Lấy dữ liệu giỏ hàng từ API
  const { data1, loading1, error1 } = useDataCart(Id);
  const [loadingCartData, setLoadingCartData] = useState<boolean>(true);

  useEffect(() => {
    if (Array.isArray(data1)) {
      setLoadingCartData(true);
      // Kiểm tra xem data1 có phải là mảng không
      setCartData(data1);
      const newQuantities: { [key: number]: number } = {};
      data1.forEach((item: any) => {
        if (item.id_product && item.quantity !== undefined) {
          // Kiểm tra các thuộc tính cần thiết
          newQuantities[item.id_product] = item.quantity;
        }
      });
      setQuantities(newQuantities);
    } else {
      console.error("Dữ liệu không phải là mảng:", data1);
    }
    setLoadingCartData(false);
  }, [data1, Id]);

  // xóa dữ liệu từ giỏ hàng
  const handleRemoveCart = async (id: number, item: any) => {
    dispatch(removeFromCart(id));
    console.log("Product removed from cart:", item);

    try {
      await axios.post("http://127.0.0.1:8000/api/delete-cart", {
        id_user: Id,
        id_product: id,
      });
      console.log("Product removed successfully");

      // Fetch updated cart data from API
      const response = await axios.post("http://127.0.0.1:8000/api/get-cart", {
        id: Id,
      });
      setCartData(response.data);

      // Update quantities
      const updatedQuantities: { [key: number]: number } = {};
      response.data.forEach((item: any) => {
        updatedQuantities[item.id_product] = item.quantity;
      });
      setQuantities(updatedQuantities);
    } catch (error) {
      console.error("Failed to remove product", error);
    }
  };

  // Lọc dữ liệu sản phẩm dựa trên giỏ hàng
  const filteredData = Array.isArray(cartData)
    ? data.filter((product) =>
        cartData.some((item) => item.id_product === product.id)
      )
    : []; // Nếu cartData không phải là mảng, trả về mảng rỗng

  // Xử lý tăng số lượng sản phẩm
  const handleIncrease = async (id: number) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/add-one", {
        id_user: Id,
        id_product: id,
      });

      if (response.data.success) {
        const updatedCartResponse = await axios.post(
          "http://127.0.0.1:8000/api/get-cart",
          { id: Id }
        );

        // Kiểm tra xem data1 có phải là mảng không
        if (Array.isArray(updatedCartResponse.data)) {
          const newQuantities: { [key: number]: number } = {};
          updatedCartResponse.data.forEach((item: any) => {
            newQuantities[item.id_product] = item.quantity;
          });
          setQuantities(newQuantities);
        } else {
          console.error(
            "Dữ liệu trả về không phải là mảng:",
            updatedCartResponse.data
          );
        }
      }
    } catch (error) {
      console.error("Lỗi khi tăng số lượng:", error);
    }
  };

  // Xử lý giảm số lượng sản phẩm
  const [isProcessing, setIsProcessing] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleDecrease = async (id: number) => {
    // Kiểm tra nếu có yêu cầu đang được xử lý cho sản phẩm này
    if (isProcessing[id]) return;

    // Kiểm tra điều kiện số lượng hiện tại
    if (quantities[id] <= 1) {
      console.log("Số lượng không thể nhỏ hơn 1");
      return;
    }

    // Đánh dấu bắt đầu xử lý yêu cầu
    setIsProcessing((prev) => ({ ...prev, [id]: true }));

    try {
      await axios.post("http://127.0.0.1:8000/api/delete-one", {
        id_user: Id,
        id_product: id,
      });

      // Cập nhật số lượng sau khi xóa
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
    } catch (error) {
      console.error("Lỗi khi giảm số lượng:", error);
    } finally {
      // Đánh dấu kết thúc xử lý yêu cầu
      setIsProcessing((prev) => ({ ...prev, [id]: false }));
    }
  };

  // Xử lý xóa sản phẩm khỏi giỏ hàng

  // Định dạng giá tiền
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Tính tổng tiền
  const totalPrice = filteredData.reduce(
    (acc, item) => acc + item.price * (quantities[item.id] || 0),
    0
  );
  const formattedTotalPrice = formatPrice(totalPrice);

  // Danh sách sản phẩm và số lượng
  const productDetails = filteredData.map((item) => ({
    name: item.name,
    quantity: quantities[item.id] || 0,
    price: item.price * (quantities[item.id] || 0),
  }));

  // Thời gian hiện tại
  const getCurrentTime = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    return now.toLocaleDateString("en-GB", options).replace(",", "");
  };
  const handleCard = (item: any) => {
    dispatch(setDataCard(item));
  };

  const currentTime = getCurrentTime();
  if (loading || loading1 || loadingCartData)
    return (
      <div className="w-full flex-1 flex items-center justify-center">
        Đang tải dữ liệu...
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <LayoutCard>
      <div className="lg:flex justify-between lg:space-x-10 sm:text-[15px] text-[10px] mb-10">
        {/* giỏ hàng và các sant phẩm , điều chỉnh số lượng */}
        <div className="mb-10 xl:w-[70%] w-full  ">
          <div className=" rounded-xl space-y-10 mt-10">
            {/* title */}
            <div className=" w-full flex justify-between items-center">
              <span className="sm:text-[25px] text-[20px] font-normal py-4  ">
                Giỏ hàng{" "}
                <span className=" sm:text-[18px] text-[12px] ">
                  ({filteredData.length} sản phẩm)
                </span>
              </span>
              <span>Xóa tất cả</span>
            </div>
            {/* overflow-y-auto max-h-[300px] sm:max-h-[800px] */}
            <div className=" w-full border-[1px] rounded-xl   p-5">
              {filteredData.length > 0 &&
                filteredData.map((item: any, index: number) => (
                  <div key={item.id}>
                    <div
                      onClick={() => handleCard(item)}
                      className={classNames(
                        "w-full sm:h-[180px] h-auto flex py-10 pl-5 ",
                        { "border-b-[1px]": index < filteredData.length - 1 }
                      )}
                    >
                      <Link href={`/card/${item.name}`}>
                        <div className="sm:w-[150px] h-full flex items-center justify-center w-[60px]  ">
                          <img
                            src="https://laptop88.vn/media/product/pro_poster_8407.jpg"
                            alt="Product image"
                          />
                        </div>
                      </Link>
                      <div className="  px-5 flex justify-between items-center  flex-1  ">
                        <div className="font-medium text-[12px] sm:text-[20px] sm:w-[280px] h-full w-[50px] flex flex-col justify-between items-center ">
                          <span>{item.name}</span>
                          <span className="font-medium text-[#909090]">
                            {formatPrice(item.price)}
                          </span>
                        </div>

                        <div className=" font-bold text-[12px] sm:text-[20px]  flex justify-center md:w-[150px] w-[60px] text-[red] dark:text-white">
                          {formatPrice(item.price * quantities[item.id])}
                        </div>
                        {/* bg-[#f5f5fd] */}
                        {/* nút chỉnh số lượng sản phẩm */}
                        <div className="flex  sm:h-[80px] sm:w-[65px] border-[1px]  w-[40px] h-[60px] rounded-lg justify-center items-center  sm:space-x-5 space-x-2 ">
                          <div className="sm:w-[10px] flex justify-center sm:text-[18px] text-[10px] font-medium">
                            {quantities[item.id]}
                          </div>
                          <div className="space-y-5 ">
                            <button
                              onClick={() => handleIncrease(item.id)}
                              className=""
                            >
                              <i className="bx  sm:text-[25px] text-[15px] text-[#979797] hover:text-[#ccc] dark:hover:text-white bxs-chevron-up-square"></i>
                            </button>
                            <button
                              className=""
                              onClick={() => handleDecrease(item.id)}
                            >
                              <i className="bx  sm:text-[25px] text-[15px] text-[#979797] hover:text-[#ccc] dark:hover:text-white bxs-chevron-down-square"></i>
                            </button>
                          </div>
                        </div>
                        {/* xóa sản phẩm */}
                        <div>
                          <button
                            onClick={() => handleRemoveCart(item.id, item)}
                            className=""
                          >
                            {/* <i className="bx bx-trash sm:text-[30px] text-[20px] text-[#191919] hover:text-red-500 "></i> */}
                            <FaTrash className="sm:text-[25px] text-[#909090] text-[15px]  hover:text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {filteredData.length === 0 && (
                <div className="flex-1 py-36 text-center  flex flex-col justify-center items-center  rounded-lg fade-out space-y-5">
                  <div className="size-[150px] border-none bg-transparent">
                    {" "}
                    <img
                      src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg"
                      alt=""
                    />
                  </div>
                  <span className="text-2xl ">Không có sản phẩm</span>
                  <Link href={"/"}>
                    <button className="bg-[#b80000] text-white rounded-lg w-[200px] py-3">
                      Mua sắm ngay
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* thông tn người nhận hàng */}
        {/* bg-[#f5f5fd] */}
        <div className=" xl:w-[30%] w-full justify-center border-[1px]  sm:p-8 p-4 rounded-xl">
          <h1 className="sm:text-4xl text-2xl font-bold  ">
            Thông tin người nhận
          </h1>
          <User
            totalPrice={formattedTotalPrice}
            productDetails={productDetails}
            currentTime={currentTime}
          />
        </div>
      </div>
    </LayoutCard>
  );
}
