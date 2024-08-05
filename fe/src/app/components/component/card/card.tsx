"use client";
import React from "react";
import Link from "next/link";
import { BsCpuFill } from "react-icons/bs";
import classNames from "classnames";
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
  };
  // console.log("data nhận được", data);
  return (
    <Link href={`/card/${data.name}`}>
      <div
        onClick={handleClick}
        className="min-w-[130px] max-w-[300px] sm:p-5  hover:shadow-md border-[1px] cursor-pointer relative overflow-hidden rounded-xl border-none mb-2"
      >
        <div
          className="w-full bg-slate-400 bg-cover bg-center sm:h-[200px] h-[150px] rounded-xl overflow-hidden "
          style={{
            backgroundImage:
              "url('https://mega.com.vn/media/news/2905_hinh-nen-may-tinh-sieu-de-thuong.jpg')",
          }}
        >
          <img
            className="hover:opacity-0"
            alt="img"
            src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
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
            {/* {data.Battery} {data.Weight} {data.category} */}
          </span>

          {/* <ul className="space-y-10 mt-3 w-full h-[100px]">
            <li className="">
              Thông số Laptop : {data.CPU} {data.RAM} {data.Storage}
              {data.Screen} {data.Battery}
            </li>
          </ul> */}

          {/* <ul>
              <li className="flex items-center">
                <BsCpuFill className="sm:size-[10px] size-[10px] mr-1" />
                <span className="text-[13px]">{data.CPU}</span>
           z   </li>
              <li className="flex items-center">
                <div className="sm:size-[20px] size-[10px] mr-1">
                  <img
                    src="https://theme.hstatic.net/200000837185/1001221874/14/config_tags_image_2_icon.png?v=1885"
                    alt=""
                  />
                </div>
                <span className="text-[13px]">{data.RAM}</span>
              </li>
            </ul>
            <ul>
              <li className="flex items-center">
                <div className="sm:size-[20px] size-[10px] mr-1">
                  <img
                    src="//theme.hstatic.net/200000837185/1001221874/14/config_tags_image_4_icon.png?v=1885"
                    alt=""
                  />
                </div>
                <span className="text-[13px]">{data.Storage}</span>
              </li>
              <li className="flex items-center">
                <div className="sm:size-[15px] size-[10px] mr-1">
                  <img
                    src="//theme.hstatic.net/200000837185/1001221874/14/config_tags_image_5_icon.png?v=1885"
                    alt=""
                  />
                </div>
                <span className="text-[13px]">{data.Screen}</span>
              </li>
            </ul> */}

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
