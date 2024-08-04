"use client";
import LayoutCard from "@/app/Layouts/LayoutCard";
import Card from "@/app/components/component/card/card";
import APILAPTOP from "@/app/API/APILAPTOP";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

interface Laptop {
  name: string;
  // add other properties as needed
}

function ListSearch() {
  const params = useParams();
  const encodedType = params.type as string;

  // Giải mã URL
  const type = decodeURIComponent(encodedType);

  const [laptop, setLaptop] = useState<Laptop[]>([]);

  useEffect(() => {
    // Filter data based on type
    const filteredLaptops = APILAPTOP.filter((item) => item.name === type);
    setLaptop(filteredLaptops);
  }, [type]);

  console.log("dữ liệu chuyển vào card", laptop);

  return (
    <div>
      <LayoutCard>
        <div className="w-full mb-10">
          <div className="w-full flex justify-between items-center sm:text-4xl text-2xl">
            <span>Kết quả tìm kiếm "{type}"</span>
            <button className="p-5 bg-[#d0011b] text-white rounded-lg">
              Sản phẩm ({laptop.length})
            </button>
          </div>
          <div className="bg-white mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {laptop.map((item: any, index: number) => (
              <Card key={index} data={item[0]} />
            ))}
          </div>
        </div>
      </LayoutCard>
    </div>
  );
}

export default ListSearch;
