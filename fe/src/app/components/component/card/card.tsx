"use client";
import React from "react";
import Link from "next/link";
import { BsCpuFill } from "react-icons/bs";
import classNames from "classnames";

interface CardProps {
  sale?: boolean;
  data?: any;
}

export default function Card({
  sale = false,
  data = {
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
}: CardProps) {
  return (
    <Link href={`/card/${data.name}`}>
      <div className="min-w-[130px] max-w-[300px] hover:shadow-md border-[1px] cursor-pointer relative">
        {sale && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-2xl font-bold">
            - 15%
          </div>
        )}
        <div
          className="w-full bg-slate-400 bg-cover bg-center"
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
        <div className="bg-white p-2">
          <span className="block overflow-hidden text-ellipsis whitespace-nowrap w-full mb-5">
            {data.name}
          </span>

          <div
            className={classNames(
              "flex items-center",
              sale ? "justify-between" : "justify-start"
            )}
          >
            {sale && (
              <span className="relative text-[#ccc] w-full text-center sm:text-3xl text-xl h-full">
                {data.price}
                <div className="absolute inset-x-0 top-1/2 h-px bg-[#ccc] transform -translate-y-1/2"></div>
              </span>
            )}
            <span className="text-red-600 w-full text-center sm:text-3xl text-xl">
              {data.price}
            </span>
          </div>
          <nav className="sm:flex justify-between w-full mt-3">
            <ul>
              <li className="flex items-center">
                <BsCpuFill className="sm:size-[10px] size-[10px] mr-1" />
                <span className="text-[13px]">{data.CPU}</span>
              </li>
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
            </ul>
          </nav>
        </div>
      </div>
    </Link>
  );
}
