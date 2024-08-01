"use client";
import React from "react";
import Card from "../card/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function SearchLaptop() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7];
  const laptop = ["Apple", "Dell", "HP", "Lenovo", "Asus"];
  const price = ["Dưới 5tr", "Từ 5 đến 10tr", "Tu 10 - 15tr", "Tren 15tr"];
  const demand = ["Văn phòng", "Gaming", "Đồ họa"];

  return (
    <div className="border-[1px] mb-10">
      <div className="  py-10 border-[1px] p-5">
        <h2 className="text-4xl font-bold mb-10">Lọc sản phẩm</h2>
        <div className="w-full  sm:border-[1px]  flex items-center space-x-5 sm:pl-10 pl-0 sm:py-[20px] py-[10px] sm:bg-[#c3c7d0]">
          {/* lọc sản phẩm  theo hãng */}
          <Select>
            <SelectTrigger className="sm:w-[250px] w-[145px] h-[40px] sm:text-[15px] text-[12px] border-[1px]  ">
              <SelectValue placeholder=" HÃNG LOPTOP" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="">
                {laptop.map((item, index) => (
                  <SelectItem
                    className="sm:text-[15px] text-[12px] "
                    key={index}
                    value={item}
                  >
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* lọc sản phẩm  theo giá */}
          <Select>
            <SelectTrigger className="sm:w-[200px] w-[145px] h-[40px] sm:text-[15px] text-[12px]">
              <SelectValue placeholder=" GIÁ" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {price.map((item, index) => (
                  <SelectItem
                    className="sm:text-[15px] text-[12px]"
                    key={index}
                    value={item}
                  >
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* lọc sản phẩm  theo nhu cầu */}
          <Select>
            <SelectTrigger className="sm:w-[200px] w-[145px] h-[40px] sm:text-[15px] text-[12px]">
              <SelectValue placeholder="NHU CẦU" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {demand.map((item, index) => (
                  <SelectItem
                    className="sm:text-[15px] text-[12px]"
                    key={index}
                    value={item}
                  >
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="bg-white mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {arr.map((item, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
