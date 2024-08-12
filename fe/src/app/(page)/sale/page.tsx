"use client";
import { useState, useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";

import LayoutCard from "@/app/Layouts/LayoutCard";
import Card from "@/app/components/component/card/card";
import PaginationData from "@/app/components/pagination/pagination";
import { RootState } from "@/app/redux/store";

export default function Sale() {
  const [data, setData] = useState<any>([]);
  const dataDispatch = useSelector(
    (state: any) => state.dataDispart.dataDispart
  );
  const dataPagination = useSelector(
    (state: RootState) => state.paginationData.dataPaginationData
  );
  useEffect(() => {
    setData(dataDispatch);
  }, [dataDispatch]);
  return (
    <LayoutCard>
      <div className="w-full mb-10">
        <div className="w-full flex justify-between items-center sm:text-4xl text-2xl">
          <span className="py-5 font-medium">Sản phẩm khuyến mãi</span>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {dataPagination.map((item: any, index: number) => (
            <Card key={index} sale={true} data={item} />
          ))}
        </div>
      </div>
      <div>
        <PaginationData filteredData={dataDispatch} />
      </div>
    </LayoutCard>
  );
}
