"use client";
import React, { useState, useEffect } from "react";
import Card from "../card/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import APILAPTOP from "@/app/API/APILAPTOP";

// Define a type for laptop data
interface Laptop {
  brand: string;
  price: number;
  category: string;
}

export default function SearchLaptop() {
  const laptopBrands = ["Apple", "Dell", "HP", "Lenovo", "Asus"];
  const priceRanges = [
    "Dưới 5tr",
    "Từ 5 đến 10tr",
    "Từ 10 - 15tr",
    "Trên 15tr",
  ];
  const demands = ["Văn phòng", "Gaming", "Đồ họa"];

  const [data, setData] = useState<Laptop[]>(APILAPTOP);
  const [filteredData, setFilteredData] = useState<Laptop[]>(APILAPTOP);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedDemand, setSelectedDemand] = useState<string | null>(null);

  useEffect(() => {
    const filtered = data
      .filter((item) => (selectedBrand ? item.brand === selectedBrand : true))
      .filter((item) =>
        selectedPrice
          ? selectedPrice === "Dưới 5tr"
            ? item.price < 5000000
            : selectedPrice === "Từ 5 đến 10tr"
              ? item.price >= 5000000 && item.price <= 10000000
              : selectedPrice === "Từ 10 - 15tr"
                ? item.price > 10000000 && item.price <= 15000000
                : item.price > 15000000
          : true
      )
      .filter((item) =>
        selectedDemand ? item.category === selectedDemand : true
      );

    setFilteredData(filtered);
  }, [selectedBrand, selectedPrice, selectedDemand, data]);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageEnd: number = Math.ceil(filteredData.length / 10);
  const startIndex: number = (currentPage - 1) * 10;
  const endIndex: number = currentPage * 10;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Generate page numbers
  const pages: number[] = [];
  for (let i = 1; i <= pageEnd; i++) {
    pages.push(i);
  }
  // Calculate pages to display
  const totalPagesToDisplay = 3;
  const start = Math.max(currentPage - Math.floor(totalPagesToDisplay / 2), 1);
  const end = Math.min(start + totalPagesToDisplay - 1, pageEnd);

  // Adjust start if end is too close to the end of the array
  const adjustedStart = Math.max(end - totalPagesToDisplay + 1, 1);

  const pagesToDisplay = pages.slice(adjustedStart - 1, end);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className=" mb-10">
      <div className="sm:py-10 ">
        {/* <h2 className="text-4xl font-bold mb-10">Lọc sản phẩm</h2> */}
        <div className="w-full sm:border-[1px] flex items-center space-x-5 sm:pl-10 pl-0 sm:py-[20px] py-[10px] sm:bg-[#c3c7d0] rounded-xl">
          {/* Filter by brand */}
          <Select onValueChange={(value) => setSelectedBrand(value)}>
            <SelectTrigger className="sm:w-[250px] w-[145px] sm:h-[40px] h-[30px] sm:text-[15px] text-[12px] ring-0 focus:ring-0 sm:border-none border-[1px] focus-visible:ring-offset-0 focus-visible:ring-0">
              <SelectValue placeholder="HÃNG LAPTOP" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {laptopBrands.map((item, index) => (
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

          {/* Filter by price */}
          <Select onValueChange={(value) => setSelectedPrice(value)}>
            <SelectTrigger className="sm:w-[200px] w-[145px] sm:h-[40px] h-[30px] sm:text-[15px] text-[12px] ring-0 focus:ring-0 sm:border-none border-[1px] focus-visible:ring-offset-0 focus-visible:ring-0">
              <SelectValue placeholder="GIÁ" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {priceRanges.map((item, index) => (
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

          {/* Filter by demand */}
          <Select onValueChange={(value) => setSelectedDemand(value)}>
            <SelectTrigger className="sm:w-[200px] w-[145px] sm:h-[40px] h-[30px] sm:text-[15px] text-[12px] ring-0 focus:ring-0 sm:border-none border-[1px] focus-visible:ring-offset-0 focus-visible:ring-0">
              <SelectValue placeholder="NHU CẦU" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
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
        </div>
        {/* kết quả lọc sản phẩm */}
        {currentData.length > 0 ? (
          <div>
            <div className="bg-white mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {currentData.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="sm:text-[18px] text-[12px]"
                    onClick={() =>
                      currentPage > 3 && handlePageChange(currentPage - 3)
                    }
                  />
                </PaginationItem>
                <PaginationItem>
                  {pagesToDisplay.map((item) => (
                    <PaginationLink
                      key={item}
                      className={`sm:text-[18px] text-[12px] ${item === currentPage ? "font-bold border-[1px] bg-black text-white" : ""}`}
                      onClick={() => handlePageChange(item)}
                    >
                      {item}
                    </PaginationLink>
                  ))}
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="sm:text-[18px] text-[12px]" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className="sm:text-[18px] text-[12px]"
                    onClick={() =>
                      currentPage < pageEnd && handlePageChange(currentPage + 3)
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        ) : (
          // nếu không tìm thấy sản phẩm
          <div className="text-center pt-10">
            Không tìm thấy sản phẩm phù hợp với yêu cầu
          </div>
        )}
      </div>
    </div>
  );
}
