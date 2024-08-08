"use client";
import "boxicons/css/boxicons.min.css";
import classNames from "classnames";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { addToCart, removeFromCart } from "@/app/redux/slices/dataCart";

import LayoutCard from "@/app/Layouts/LayoutCard";
import SwiperLaptop from "@/app/components/component/swiper/swipelaptop";

function Card() {
  const dispatch = useDispatch();
  const dataCard = useSelector((state: any) => state.dataCard.dataCard);
  const dataCart = useSelector((state: any) => state.dataCart.dataCart);
  const data = useSelector((state: any) => state.dataDispart.dataDispart);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [dataLaptop, setDataLaptop] = useState<any>([]);

  useEffect(() => {
    if (dataCard) {
      setIsActive(dataCart.some((item: any) => item.name === dataCard.name));
      setDataLaptop(
        data.filter((item: any) => item.category === dataCard.category)
      );
      console.log("dataLaptop", dataLaptop);
      console.log("dataCart", dataCart);
    }
  }, [dataCart, dataCard]);

  const handleDispatchCard = () => {
    if (isActive) {
      dispatch(removeFromCart(dataCard));
    } else {
      dispatch(addToCart(dataCard));
    }
    setIsActive(!isActive);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div>
      <div className="w-full lg:flex flex-row sm:mt-10">
        {/* ảnh laptop */}
        <div className="lg:w-[50%] w-full lg:mb-0 mb-5 ">
          <div className="w-full flex justify-center items-center sm:max-h-[380px] overflow-hidden">
            <img
              src="https://laptop88.vn/media/product/pro_poster_8982.jpg"
              alt="Laptop"
            />
          </div>
        </div>
        <div className="flex-1 lg:ml-10 ml-0 flex-col justify-between sm:text-3xl text-xl">
          <div className="h-full flex flex-col justify-between xl:space-y-0 space-y-5">
            <h1 className="sm:text-4xl text-3xl font-bold">{dataCard.name}</h1>
            <div className="flex space-x-2 mt-3 items-center">
              <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]" />
              <span className="text-[#959595] sm:text-2xl text-xl mt-1">
                Review
              </span>
            </div>
            <h1 className="sm:text-3xl text-2xl">
              Thương hiệu: {dataCard.brand}
            </h1>
            <h1 className="sm:text-3xl text-2xl font-bold">
              {formatPrice(dataCard.price)}
            </h1>
            <div className="flex justify-start items-center space-x-10">
              <button
                onClick={handleDispatchCard}
                className={classNames(
                  "border-[1px] px-4 sm:h-[50px] h-[35px] rounded-full text-[18px]",
                  isActive
                    ? "border-[#188b10] bg-[#188b10] text-white"
                    : "border-[#006aff] text-[#006aff] hover:bg-[#006aff] hover:text-white"
                )}
              >
                <span className="flex items-center">
                  {isActive ? (
                    <i className="bx bx-cart sm:text-[25px] text-[20px] mr-4"></i>
                  ) : (
                    <i className="bx bxs-cart-add sm:text-[25px] text-[20px] mr-4"></i>
                  )}
                  {isActive ? "Đã thêm" : "Thêm vào giỏ hàng"}
                </span>
              </button>
            </div>
            <div className="xl:mt-0 mt-10 sm:space-y-0 space-y-5">
              <div className="w-full p-4 border rounded-lg shadow-lg bg-gray-100">
                {/* bảng thông số kỹ thuật laptop */}
                <h1 className="font-bold mb-5">Bảng thông số kỹ thuật</h1>
                <span className="flex flex-wrap gap-x-6 gap-y-2">
                  <span className="font-normal">
                    <strong>CPU:</strong> {dataCard.CPU}
                  </span>
                  <span className="font-normal">
                    <strong>RAM:</strong> {dataCard.RAM}
                  </span>
                  <span className="font-normal">
                    <strong>GPU:</strong> {dataCard.GPU}
                  </span>
                  <span className="font-normal">
                    <strong>Storage:</strong> {dataCard.Storage}
                  </span>
                  <span className="font-normal">
                    <strong>Screen Size:</strong> {dataCard.Screen}
                  </span>
                  <span className="font-normal">
                    <strong>Resolution:</strong> {dataCard.Resolution}
                  </span>
                  <span className="font-normal">
                    <strong>Time:</strong> {dataCard.time}
                  </span>
                  <span className="font-normal">
                    <strong>Weight:</strong> {dataCard.Weight}
                  </span>
                  <span className="font-normal">
                    <strong>Nhu cầu:</strong> {dataCard.category}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* gợi ý */}
      <div>
        <SwiperLaptop
          text="SẢN PHẨM GỢI Ý"
          data={dataLaptop.slice(0, 10)}
          sale={true}
        />
      </div>
    </div>
  );
}

export default Card;
