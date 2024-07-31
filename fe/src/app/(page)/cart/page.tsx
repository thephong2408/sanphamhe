"use client";
import React, { useState } from "react";
import LayoutCard from "@/app/Layouts/LayoutCard";
import { RiAddLargeLine } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import Link from "next/link";
import User from "./user"; // Kiểm tra đường dẫn chính xác

export default function Cart() {
  const arr = [1, 2, 3, 4];

  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    arr.reduce(
      (acc, curr) => {
        acc[curr] = 1;
        return acc;
      },
      {} as { [key: number]: number }
    )
  );

  const handleIncrease = (item: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]:
        prevQuantities[item] < 5
          ? prevQuantities[item] + 1
          : prevQuantities[item],
    }));
  };

  const handleDecrease = (item: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]:
        prevQuantities[item] > 1
          ? prevQuantities[item] - 1
          : prevQuantities[item],
    }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <LayoutCard>
      <div className="lg:flex justify-between lg:space-x-10">
        <div className="mb-10 lg-w-[50%] w-full">
          <h1 className="text-4xl font-bold bg-red-600 p-4 text-white text-[15px]">
            Giỏ hàng
          </h1>
          <div className="space-y-10 overflow-y-auto max-h-[300px] sm:max-h-[800px]">
            {arr.map((item, index) => (
              <div key={index}>
                <div className="w-full sm:h-[150px] h-auto sm:flex flex-row text-xl my-10 ">
                  <Link href="/card">
                    <div className="sm:w-[200px] w-full h-full bg-slate-500">
                      <img
                        src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
                        alt="Product image"
                      />
                    </div>
                  </Link>
                  <div className="flex-1 h-full px-5 flex flex-col justify-between sm:space-y-0 space-y-5 sm:mt-0 mt-5">
                    <h1 className="font-medium">
                      Laptop Gaming Lenovo LOQ 15IAX9 83GS001RVN i5
                      12450HX/12GB/512GB/15.6 FHD 144Hz/RTX3050 6GB/Win11
                    </h1>

                    <h1 className="text-red-600 font-bold">
                      GIÁ: {formatPrice(14000000 * quantities[item])} VND
                    </h1>

                    <div className="flex items-center text-[12px] space-x-8">
                      <button
                        className="border-[1px] border-blue-500 text-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                        onClick={() => handleDecrease(item)}
                      >
                        <FaMinus className="sm:text-[20px] text-[15px]" />
                      </button>
                      <div className="border-[1px] border-blue-500 text-blue-500 font-bold px-5 py-2 text-[15px] flex justify-center items-center">
                        {quantities[item]}
                      </div>
                      <button
                        className="border-[1px] border-blue-500 text-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                        onClick={() => handleIncrease(item)}
                      >
                        <RiAddLargeLine className="sm:text-[20px] text-[15px]" />
                      </button>
                    </div>

                    <div className="flex justify-start items-center space-x-10 sm:text-[15px] text-[12px]">
                      <button className="sm:text-[20px] text-[15px] border-[1px] border-red-600 text-red-600 p-3 rounded-lg hover:bg-red-600 hover:text-white">
                        <i className="bx bx-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" lg-w-[50%] w-full justify-center">
          <h1 className="text-4xl font-bold bg-blue-500 p-4 text-white text-[15px]">
            Thông tin người dùng
          </h1>
          <User />
        </div>
      </div>
    </LayoutCard>
  );
}
