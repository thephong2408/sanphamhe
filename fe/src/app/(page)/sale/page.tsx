import React from "react";
import LayoutCard from "@/app/Layouts/LayoutCard";
import Card from "@/app/components/component/card/card";

export default function Sale() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7];
  return (
    <LayoutCard>
      <LayoutCard>
        <div className="w-full mb-10">
          <div className="w-full flex justify-between items-center sm:text-4xl text-2xl">
            <span className="p-5 bg-red-500 text-white rounded-lg">
              Sản phẩm khuyến mãi
            </span>
          </div>
          <div className="bg-white mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {arr.map((item, index) => (
              <Card key={index} sale={true} />
            ))}
          </div>
        </div>
      </LayoutCard>
    </LayoutCard>
  );
}
