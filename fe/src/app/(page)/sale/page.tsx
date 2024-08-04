"use client";
import { useState, useEffect } from "react";
import React from "react";
import LayoutCard from "@/app/Layouts/LayoutCard";
import Card from "@/app/components/component/card/card";
import APILAPTOP from "@/app/API/APILAPTOP";

export default function Sale() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setData(APILAPTOP);
  }, []);
  return (
    <LayoutCard>
      <LayoutCard>
        <div className="w-full mb-10">
          <div className="w-full flex justify-between items-center sm:text-4xl text-2xl">
            <span className="p-5 font-medium">Sản phẩm khuyến mãi</span>
          </div>
          <div className="bg-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {data.map((item: any, index: number) => (
              <Card key={index} sale={true} data={item} />
            ))}
          </div>
        </div>
      </LayoutCard>
    </LayoutCard>
  );
}
