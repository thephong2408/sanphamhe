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
      <div className="lg:flex justify-between lg:space-x-20 sm:text-[15px] text-[10px] mb-10">
        <div className="mb-10 md:w-[70%] w-full">
          <h1 className="sm:text-[30px] text-[20px] font-medium p-4 ">
            Giỏ hàng
          </h1>
          <div className=" overflow-y-auto max-h-[300px] sm:max-h-[800px]">
            {arr.map((item, index) => (
              <div key={index}>
                <div className="w-full sm:h-[180px] h-auto flex py-10 border-b-[1px] ">
                  <Link href="/card">
                    <div className="sm:w-[150px] sm:h-full w-[50px] h-[50px] bg-slate-500">
                      <img
                        src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
                        alt="Product image"
                      />
                    </div>
                  </Link>
                  <div className=" h-full px-5 flex justify-between  flex-1  ">
                    <span className="font-medium sm:w-[300px] w-[120px]">
                      Laptop Gaming Lenovo LOQ 15IAX9 83GS001RVN i5
                      12450HX/12GB/512GB/15.6 FHD 144Hz/RTX3050 6GB/Win11
                    </span>

                    <h1 className=" font-bold">
                      {formatPrice(14000000 * quantities[item])}
                    </h1>

                    <div className="flex bg-[#f5f5fd] sm:h-[80px] sm:w-[65px]  w-[30px] h-[40px] rounded-lg justify-center items-center  sm:space-x-5 space-x-2 ">
                      <div className="sm:w-[10px] flex justify-center sm:text-[18px] text-[10px] font-medium">
                        {quantities[item]}
                      </div>
                      <div className="space-y-5 ">
                        <button
                          onClick={() => handleIncrease(item)}
                          className=""
                        >
                          <i className="bx text-[#ccc] sm:text-[25px] hover:text-[#979797] bxs-chevron-up-square"></i>
                        </button>
                        <button
                          className=""
                          onClick={() => handleDecrease(item)}
                        >
                          <i className="bx text-[#ccc] sm:text-[25px] hover:text-[#979797] bxs-chevron-down-square"></i>
                        </button>
                      </div>
                    </div>

                    <div>
                      <button className="">
                        <i className="bx bx-trash sm:text-[30px] text-[20px] text-[#ccc] hover:text-red-500 "></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" md:w-[30%] w-full justify-center bg-[#f5f5fd] p-8">
          <h1 className="text-4xl font-bold  ">Thông tin người nhận</h1>
          <User />
        </div>
      </div>
    </LayoutCard>
  );
}
