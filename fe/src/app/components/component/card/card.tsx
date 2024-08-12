"use client";

import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setDataCard } from "@/app/redux/slices/dataCard";

interface CardProps {
  sale?: boolean;
  data?: any;
  price?: number;
}
const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default function Card({
  sale = false,
  data = [
    {
      name: "Dell XPS 15",
      price: 25000000,
      brand: "Dell",
      CPU: "i7-13700H", // rút ngắn
      RAM: "16GB",
      GPU: "RTX 4050", // rút ngắn
      Storage: "1TB SSD",
      Screen: '15.6"', // rút ngắn
      Resolution: "3840x2400",
      Battery: "86Wh",
      Weight: "2.0 kg",
      category: "graphics",
    },
  ],
}: CardProps) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setDataCard(data));
    const dataCard = JSON.stringify(data);
    console.log("data", data);
    localStorage.setItem("dataCard", dataCard);
  };

  return (
    <Link href={`/card/${data.name}`}>
      <div
        onClick={handleClick}
        className="min-w-[130px] max-w-[300px] sm:p-5 p-3  hover:shadow-inner dark:hover:shadow-white border-[1px] cursor-pointer relative overflow-hidden rounded-xl  mb-2"
      >
        <div className="w-full  bg-cover bg-center flex items-center justify-center sm:h-[180px] h-[150px] rounded-xl overflow-hidden ">
          <img
            className="hover:scale-110 transition-all duration-300"
            alt="img"
            src="https://laptop88.vn/media/product/pro_poster_8407.jpg"
          />
        </div>
        {/* đánh giá sản phẩm */}
        <div className="flex space-x-2 mt-3 items-center">
          <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]  " />
          <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]  " />
          <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]  " />
          <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]  " />
          <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]  " />

          <span className="text-[#959595] sm:text-2xl text-xl mt-1">
            Review
          </span>
        </div>
        <div className=" mt-3 ">
          <span className="block overflow-hidden h-[70px] text-ellipsis w-full sm:mb-5  line-clamp-3">
            {data.name} : {data.CPU} {data.RAM} {data.Storage} {data.Screen}{" "}
            {data.Battery} {data.Weight}
            {/* {data.category} */}
          </span>

          <div className="space-y-3 sm:text-3xl text-xl">
            {sale && (
              <h1>
                <span className="sm:text-3xl text-xl font-extralight relative text-[#ccc] h-full">
                  {formatPrice(data.price)}
                  <div className="absolute w-full inset-x-0 top-1/2 h-px bg-[#ccc] transform -translate-y-1/2"></div>
                </span>
              </h1>
            )}
            <span className=" font-bold ">{formatPrice(data.price)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
