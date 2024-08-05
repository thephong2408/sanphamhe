"use client";
import LayoutCard from "@/app/Layouts/LayoutCard";
import Card from "@/app/components/component/card/card";
import APILAPTOP from "@/app/API/APILAPTOP";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

interface Laptop {
  name: string;
  // add other properties as needed
}

function ListSearch() {
  const data = useSelector((state: any) => state.dataSearch.dataSearch);
  console.log("redux", data);

  // Giải mã URL
  const params = useParams();
  const encodedType = params.type as string;
  const type = decodeURIComponent(encodedType);

  return (
    <div>
      <LayoutCard>
        <div className="w-full mb-10">
          <div className="w-full flex justify-between items-center sm:text-4xl text-2xl">
            <span>Kết quả tìm kiếm "{type}"</span>
            <button className="p-5 bg-[#d0011b] text-white rounded-lg">
              Sản phẩm ({data.length})
            </button>
          </div>
          <div className="bg-white mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {data.map((item: any, index: number) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>
      </LayoutCard>
    </div>
  );
}

export default ListSearch;
