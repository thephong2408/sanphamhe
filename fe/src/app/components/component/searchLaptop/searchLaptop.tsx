"use client";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GrPowerReset } from "react-icons/gr";

import { useSelector } from "react-redux";
import PaginationData from "../../pagination/pagination";
import { RootState } from "@/app/redux/store";
import Card from "../card/card";

interface Laptop {
  brand: string;
  price: number;
  category: string;
}

export default function SearchLaptop() {
  const dataList = useSelector(
    (state: RootState) => state.dataDispart.dataDispart
  );
  const dataPagination = useSelector(
    (state: RootState) => state.paginationData.dataPaginationData
  );

  const [data, setData] = useState<Laptop[]>(dataList);
  const [filteredData, setFilteredData] = useState<Laptop[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedDemand, setSelectedDemand] = useState<string | null>(null);

  const laptopBrands = ["Apple", "Dell", "HP", "Lenovo", "Asus"];
  const priceRanges = [
    { label: "Dưới 5tr", min: 0, max: 5000000 },
    { label: "Từ 5 đến 10tr", min: 5000000, max: 10000000 },
    { label: "Từ 10 - 15tr", min: 10000000, max: 15000000 },
    { label: "Trên 15tr", min: 15000000, max: Infinity },
  ];
  const demands = ["Văn phòng", "Gaming", "Đồ họa"];

  useEffect(() => {
    setData(dataList);
  }, [dataList]);

  useEffect(() => {
    const filterByBrand = (item: any) =>
      selectedBrand ? item.brand === selectedBrand : true;

    const filterByPrice = (item: any) => {
      if (!selectedPrice) return true;

      const priceRange = priceRanges.find(
        (range) => range.label === selectedPrice
      );
      return priceRange
        ? item.price >= priceRange.min && item.price <= priceRange.max
        : true;
    };

    const filterByDemand = (item: any) =>
      selectedDemand ? item.category === selectedDemand : true;

    const filtered = data
      .filter(filterByBrand)
      .filter(filterByPrice)
      .filter(filterByDemand);

    setFilteredData(filtered);
  }, [data, selectedBrand, selectedPrice, selectedDemand]);
  const handleReset = () => {
    setSelectedBrand(null);
    setSelectedPrice(null);
    setSelectedDemand(null);
    setFilteredData(dataList); // Ensure dataList is used for reset
  };

  return (
    <div className=" mb-10">
      <div className="sm:py-10">
        <div className="w-full sm:border-[1px] flex items-center space-x-5 sm:pl-10 pl-0 sm:py-[20px] py-[10px] rounded-xl">
          <Select
            value={selectedBrand || ""}
            onValueChange={(value) => setSelectedBrand(value)}
          >
            <SelectTrigger className="sm:w-[200px] w-[145px] dark:border-[#ccc] border-[1px] sm:h-[40px] h-[30px] sm:text-[15px] text-[12px] ring-0 focus-visible:ring-offset-0 focus-visible:ring-0">
              <SelectValue placeholder="HÃNG LAPTOP" />
            </SelectTrigger>
            <SelectContent className="sm:w-[200px] w-[145px]">
              <SelectGroup className="w-full">
                {laptopBrands.map((item, index) => (
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

          <Select
            value={selectedPrice || ""}
            onValueChange={(value) => setSelectedPrice(value)}
          >
            <SelectTrigger className="sm:w-[200px] w-[145px] dark:border-[#ccc] border-[1px] sm:h-[40px] h-[30px] sm:text-[15px] text-[12px] ring-0 focus-visible:ring-offset-0 focus-visible:ring-0">
              <SelectValue placeholder="GIÁ" />
            </SelectTrigger>
            <SelectContent className="sm:w-[200px] w-[145px]">
              <SelectGroup className="w-full">
                {priceRanges.map((item, index) => (
                  <SelectItem
                    className="sm:text-[15px] text-[12px]"
                    key={index}
                    value={item.label}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            value={selectedDemand || ""}
            onValueChange={(value) => setSelectedDemand(value)}
          >
            <SelectTrigger className="sm:w-[200px] w-[145px] dark:border-[#ccc] border-[1px] sm:h-[40px] h-[30px] sm:text-[15px] text-[12px] ring-0 focus-visible:ring-offset-0 focus-visible:ring-0">
              <SelectValue placeholder="NHU CẦU" />
            </SelectTrigger>
            <SelectContent className="sm:w-[200px] w-[145px]">
              <SelectGroup className="w-full">
                {demands.map((item, index) => (
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
          <button
            onClick={handleReset}
            className="   sm:h-[40px] h-[30px]  rounded-md ml-4"
          >
            <GrPowerReset className="sm:text-[35px] text-[20px]" />
          </button>
        </div>
        {filteredData.length > 0 ? (
          <div>
            <div className=" mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-transparent gap-5">
              {dataPagination.map((item: any, index: number) => (
                <Card key={index} data={item} />
              ))}
            </div>
            <div>
              <PaginationData filteredData={filteredData} />
            </div>
          </div>
        ) : (
          <div className="text-center pt-10">
            Không tìm thấy sản phẩm phù hợp với yêu cầu
          </div>
        )}
      </div>
    </div>
  );
}
