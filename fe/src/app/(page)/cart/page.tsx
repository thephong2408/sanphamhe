"use client";
import React, { useState } from "react";
import LayoutCard from "@/app/Layouts/LayoutCard";
import Link from "next/link";
import User from "./user";
import { useSelector } from "react-redux";

export default function Cart() {
  const dataCart = useSelector((state: any) => state.dataCart.dataCart);

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

  const handleIncrease = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]:
        prevQuantities[id] < 5 ? prevQuantities[id] + 1 : prevQuantities[id],
    }));
  };

  const handleDecrease = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]:
        prevQuantities[id] > 1 ? prevQuantities[id] - 1 : prevQuantities[id],
    }));
  };

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

  return (
    <LayoutCard>
      <div className="lg:flex justify-between lg:space-x-20 sm:text-[15px] text-[10px] mb-10">
        <div className="mb-10 md:w-[70%] w-full">
          <h1 className="sm:text-[30px] text-[20px] font-medium p-4 ">
            Giỏ hàng
          </h1>
          <div className=" overflow-y-auto max-h-[300px] sm:max-h-[800px]">
            {dataCart.map((item: any) => (
              <div key={item.id}>
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
                      {item.name} / {item.brand} / {item.CPU} / {item.RAM} /
                      {item.GPU} / {item.Storage} / {item.Screen} /
                      {item.Resolution} / {item.Battery} / {item.Weight} /
                      {item.category}
                    </span>

                    <h1 className=" font-bold">
                      {formatPrice(item.price * quantities[item.id])}
                    </h1>

                    <div className="flex bg-[#f5f5fd] sm:h-[80px] sm:w-[65px]  w-[30px] h-[40px] rounded-lg justify-center items-center  sm:space-x-5 space-x-2 ">
                      <div className="sm:w-[10px] flex justify-center sm:text-[18px] text-[10px] font-medium">
                        {quantities[item.id]}
                      </div>
                      <div className="space-y-5 ">
                        <button
                          onClick={() => handleIncrease(item.id)}
                          className=""
                        >
                          <i className="bx text-[#ccc] sm:text-[25px] hover:text-[#979797] bxs-chevron-up-square"></i>
                        </button>
                        <button
                          className=""
                          onClick={() => handleDecrease(item.id)}
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
          <User totalPrice={mony} />
        </div>
      </div>
    </LayoutCard>
  );
}
