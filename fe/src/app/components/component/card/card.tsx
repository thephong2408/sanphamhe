"use client";
import React from "react";
import Link from "next/link";
import { BsCpuFill } from "react-icons/bs";
import classNames from "classnames";

interface CardProps {
  sale?: boolean; // Optional prop to indicate if the item is on sale
}

export default function Card({ sale = false }: CardProps) {
  return (
    <Link href={"/card"}>
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
          <span className="block text-ellipsis line-clamp-2 w-full mb-5">
            Laptop Gaming Asus TUF A15 FA507NU LP131W R5 7
          </span>

          <div
            className={classNames(
              "flex items-center",
              sale ? "justify-between" : "justify-start"
            )}
          >
            {sale && (
              <span className="relative text-[#ccc] w-full text-center sm:text-3xl text-xl h-full">
                14 000 000
                <div className="absolute inset-x-0 top-1/2 h-px bg-[#ccc] transform -translate-y-1/2"></div>
              </span>
            )}
            <span className="text-red-600 w-full text-center sm:text-3xl text-xl">
              14 000 000
            </span>
          </div>
          <nav className="flex justify-between w-full mt-3">
            <ul>
              <li className="flex items-center">
                <BsCpuFill className="sm:size-[20px] size-[10px] mr-1" />
                <span className="text-10px">i5 13420H</span>
              </li>
              <li className="flex items-center">
                <div className="sm:size-[20px] size-[10px] mr-1">
                  <img
                    src="https://theme.hstatic.net/200000837185/1001221874/14/config_tags_image_2_icon.png?v=1885"
                    alt=""
                  />
                </div>
                <span className="text-10px">i5 13420H</span>
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
                <span className="text-10px">i5 13420H</span>
              </li>
              <li className="flex items-center">
                <div className="sm:size-[20px] size-[10px] mr-1">
                  <img
                    src="//theme.hstatic.net/200000837185/1001221874/14/config_tags_image_5_icon.png?v=1885"
                    alt=""
                  />
                </div>
                <span className="text-10px">i5 13420H</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Link>
  );
}
