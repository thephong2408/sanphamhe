"use client";
import LayoutCard from "@/app/Layouts/LayoutCard";
import Card from "@/app/components/component/card/card";
function ListSearch() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7];
  return (
    <div>
      <LayoutCard>
        <div className="w-full mb-10">
          <div className="w-full flex justify-between items-center sm:text-4xl text-2xl">
            <span>Kết quả tìm kiếm "t"</span>
            <button className="p-5 bg-[#d0011b] text-white rounded-lg">
              Sản phẩm ( 20 )
            </button>
          </div>
          <div className="bg-white mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {arr.map((item, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
      </LayoutCard>
    </div>
  );
}

export default ListSearch;
