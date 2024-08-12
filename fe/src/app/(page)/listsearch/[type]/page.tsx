"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

import LayoutCard from "@/app/Layouts/LayoutCard";
import Card from "@/app/components/component/card/card";
import PaginationData from "@/app/components/pagination/pagination";
import { RootState } from "@/app/redux/store";

function ListSearch() {
  const data = useSelector((state: any) => state.dataSearch.dataSearch);
  const dataPagination = useSelector(
    (state: RootState) => state.paginationData.dataPaginationData
  );

  console.log("redux", data);
  // Giải mã URL
  const params = useParams();
  const encodedType = params.type as string;
  const type = decodeURIComponent(encodedType);

  return (
    <div>
      <div className="w-full mb-10">
        <div className="w-full flex justify-between items-center sm:text-4xl text-2xl">
          <span>Kết quả tìm kiếm "{type}"</span>
          <button className="p-5 bg-[#b80000] text-white rounded-lg">
            Kết quả tìm kiếm ({data.length})
          </button>
        </div>
        {data.length > 0 ? (
          <div className=" mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {dataPagination.map((item: any, index: number) => (
              <Card key={index} data={item} />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex sm:h-auto h-[400px] items-center md:text-4xl text-2xl sm:mt-[100px] justify-center">
            <h1>Không tìm thấy kết quả tìm kiếm</h1>
          </div>
        )}
        {/* Pagination */}
        {dataPagination.length > 0 && (
          <div>
            <PaginationData filteredData={data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ListSearch;
