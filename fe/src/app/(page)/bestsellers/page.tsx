"use client";
import { useState, useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";

import LayoutCard from "@/app/Layouts/LayoutCard";
import Card from "@/app/components/component/card/card";
import PaginationData from "@/app/components/pagination/pagination";
import { RootState } from "@/app/redux/store";
import useDispartData from "@/app/useDispartData";

export default function BestSellers() {
  const [data1, setData] = useState<any>([]);
  const { data, loading, error } = useDispartData();
  const dataPagination = useSelector(
    (state: RootState) => state.paginationData.dataPaginationData
  );
  useEffect(() => {
    setData(data.slice(0, 30));
  }, [data]);
  if (loading)
    return (
      <div className="w-full flex-1 flex items-center justify-center">
        Đang tải dữ liệu...
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <LayoutCard>
      <div className="w-full mb-10">
        <div className="w-full flex justify-between items-center sm:text-4xl text-2xl">
          <span className="py-5 font-medium">Sản phẩm bán chạy</span>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {dataPagination.map((item: any, index: number) => (
            <Card key={index} sale={true} data={item} />
          ))}
        </div>
      </div>
      <div>
        <PaginationData filteredData={data1} />
      </div>
    </LayoutCard>
  );
}
