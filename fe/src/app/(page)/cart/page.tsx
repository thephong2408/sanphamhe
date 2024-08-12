"use client";
import React, { useState, useEffect } from "react";
import LayoutCard from "@/app/Layouts/LayoutCard";
import Link from "next/link";
import User from "./user";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/app/redux/slices/dataCart";
import { FaTrash } from "react-icons/fa6";

export default function Cart() {
  const dispatch = useDispatch();
  // lấy ra danh sách các sản phẩm thêm vào giở hàng
  const dataCart = useSelector((state: any) => state.dataCart.dataCart);
  const [data, setData] = useState(dataCart);

  // cập nhập dữ liệu giở hàng khi dữ liệu chuyền vào thay đổi
  useEffect(() => {
    setData(dataCart);
  }, [dataCart]);

  // Khởi tạo state quantities với id của mỗi item làm khóa
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    dataCart.reduce(
      (acc: { [key: number]: number }, curr: any) => {
        acc[curr.id] = 1; // Sử dụng curr.id làm khóa
        return acc;
      },
      {} as { [key: number]: number }
    )
  );
  //xóa sản phẩm khỏi giở hàng
  const handleRemove = (item: any) => {
    dispatch(removeFromCart(item.id));
    // console.log("id", item);
  };

  // tăng số lượng sản phẩm
  const handleIncrease = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]:
        prevQuantities[id] < 5 ? prevQuantities[id] + 1 : prevQuantities[id],
    }));
  };
  // giảm số lượng sản phẩm
  const handleDecrease = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]:
        prevQuantities[id] > 1 ? prevQuantities[id] - 1 : prevQuantities[id],
    }));
  };
  //
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  const totalPrice = dataCart.reduce(
    (acc: number, item: any) => acc + item.price * quantities[item.id],
    0
  );
  const mony = formatPrice(totalPrice);
  // danh sách sản phẩm số lượng và tiền
  const getProductDetails = () => {
    return data.map((item: any) => ({
      name: item.name,
      quantity: quantities[item.id],
      price: item.price * quantities[item.id],
    }));
  };
  const productDetails = getProductDetails();
  // thời gian
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

  const currentTime = getCurrentTime();
  // console.log(currentTime);

  return (
    <LayoutCard>
      <div className="lg:flex justify-between lg:space-x-10 sm:text-[15px] text-[10px] mb-10">
        {/* giỏ hàng và các sant phẩm , điều chỉnh số lượng */}
        <div className="mb-10 xl:w-[70%] w-full  ">
          <div className=" rounded-xl space-y-10 mt-10">
            <span className="sm:text-[25px] text-[20px] font-normal py-4  ">
              Giỏ hàng{" "}
              <span className=" sm:text-[18px] text-[12px] ">
                ({data.length} sản phẩm)
              </span>
            </span>
            {/* overflow-y-auto max-h-[300px] sm:max-h-[800px] */}
            <div className=" w-full border-[1px] rounded-xl   p-5">
              {data.length > 0 &&
                data.map((item: any) => (
                  <div key={item.id}>
                    <div className="w-full sm:h-[180px] h-auto flex py-10 pl-5 border-b-[1px] ">
                      <Link href={`/card/${data.name}`}>
                        <div className="sm:w-[150px] h-full flex items-center justify-center w-[60px]  ">
                          <img
                            src="https://laptop88.vn/media/product/pro_poster_8407.jpg"
                            alt="Product image"
                          />
                        </div>
                      </Link>
                      <div className=" h-full px-5 flex justify-between items-center  flex-1  ">
                        <div className="font-medium text-[18px] sm-[text-15] sm:w-[280px] h-full w-[120px] flex flex-col justify-between items-center ">
                          <span>{item.name}</span>
                          <span className="font-medium">20.0000.000</span>
                        </div>

                        <div className=" font-bold text-[18px] sm-[text-15]  flex justify-center md:w-[150px] w-[60px]">
                          {formatPrice(item.price * quantities[item.id])}
                        </div>
                        {/* bg-[#f5f5fd] */}
                        <div className="flex  sm:h-[80px] sm:w-[65px] border-[1px]  w-[30px] h-[40px] rounded-lg justify-center items-center  sm:space-x-5 space-x-2 ">
                          <div className="sm:w-[10px] flex justify-center sm:text-[18px] text-[10px] font-medium">
                            {quantities[item.id]}
                          </div>
                          <div className="space-y-5 ">
                            <button
                              onClick={() => handleIncrease(item.id)}
                              className=""
                            >
                              <i className="bx  sm:text-[25px] hover:text-[#979797] bxs-chevron-up-square"></i>
                            </button>
                            <button
                              className=""
                              onClick={() => handleDecrease(item.id)}
                            >
                              <i className="bx  sm:text-[25px] hover:text-[#979797] bxs-chevron-down-square"></i>
                            </button>
                          </div>
                        </div>

                        <div>
                          <button
                            onClick={() => handleRemove(item)}
                            className=""
                          >
                            {/* <i className="bx bx-trash sm:text-[30px] text-[20px] text-[#191919] hover:text-red-500 "></i> */}
                            <FaTrash className="sm:text-[25px] text-[20px]  hover:text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {data.length === 0 && (
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
            totalPrice={mony}
            productDetails={productDetails}
            currentTime={currentTime}
          />
        </div>
      </div>
    </LayoutCard>
  );
}
