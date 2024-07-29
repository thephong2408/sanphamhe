"use client";
import React from "react";
import LayoutCard from "@/app/Layouts/LayoutCard";
import { Key } from "lucide-react";

export default function Cart() {
  const arr = [1, 2, 3, 4];
  return (
    <LayoutCard>
      <div className="w-full mb-10">
        <h1 className="text-4xl font-bold bg-red-600 p-4 text-white">
          Giỏ hàng
        </h1>
        <div className="space-y-10">
          {arr.map((item, index) => (
            // từng sản phẩm
            <div
              key={index}
              className="w-full sm:h-[200px] h-auto sm:flex flex-row sm:text-4xl text-xl my-10"
            >
              <div className="sm:w-[200px] w-full h-full bg-slate-500">
                <img
                  src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
                  alt=""
                />
              </div>
              {/* thông tin sản phẩm */}
              <div className="flex-1 h-full px-5 flex flex-col justify-between">
                <h1 className="font-medium">
                  Laptop Gaming Lenovo LOQ 15IAX9 83GS001RVN i5
                  12450HX/12GB/512GB/15.6 FHD 144Hz/RTX3050 6GB/Win11
                </h1>
                <div className="sm:flex flex-row justify-start items-center sm:space-x-10 space-x-0 sm:space-y-0 space-y-5">
                  <h1 className="text-red-600 font-bold">GIÁ: 14 000 000</h1>
                  <button className="border-[1px] border-[#2f7adf] text-[#2f7adf] p-4 rounded-lg hover:bg-[#2f7adf] hover:text-white">
                    Mua ngay
                  </button>
                  <button className="border-[1px] border-red-600 text-red-600 p-4 rounded-lg hover:bg-red-600 hover:text-white w-[300px]">
                    Xóa khỏi giỏ hàng
                  </button>
                </div>
                <div className="sm:flex flex-row sm:space-x-10 sm:space-y-0 space-y-5 sm:mt-0 mt-5">
                  <div className="sm:text-2xl text-xl p-3 rounded-lg bg-red-600 text-white text-center sm:w-[300px] w-full">
                    Đã bao gồm phí VAT
                  </div>
                  <div className="sm:text-2xl text-xl p-3 sm:mt-0 mt-3 rounded-lg bg-red-600 text-white text-center sm:w-[300px] w-full">
                    Bảo hành chính hãng 12 tháng
                  </div>
                </div>
              </div>
              {/* kết thúc thông tin sản phẩm */}
            </div>
            // kết thúc từng sản phẩm
          ))}
        </div>
      </div>
    </LayoutCard>
  );
}
