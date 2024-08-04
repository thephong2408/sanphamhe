"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import LayoutCard from "@/app/Layouts/LayoutCard";
import SwiperLaptop from "@/app/components/component/swiper/swipelaptop";
import APILAPTOP from "@/app/API/APILAPTOP";
import Link from "next/link";
import classNames from "classnames";
function Card() {
  const params = useParams();
  const encodedType = params.type as string;
  const [isActive, setIsActive] = useState<boolean>(true);

  // Giải mã URL
  const type = decodeURIComponent(encodedType);

  const [laptop, setLaptop] = useState(APILAPTOP);

  useEffect(() => {
    setLaptop(APILAPTOP.filter((item) => item.name === type));
  }, [APILAPTOP]);

  return (
    <div>
      <LayoutCard>
        <div className="w-full lg:flex flex-row">
          {/* ảnh laptop */}
          <div className="lg:w-[50%] w-full lg:mb-0 mb-5">
            <div className="w-full h-full">
              <img
                src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-[50%] flex-1 h-full lg:ml-10 ml-0 flex-col justify-between sm:text-3xl text-xl">
            <div className="space-y-5 h-full flex-col justify-between">
              <h1 className="sm:text-4xl text-3xl font-bold ">
                {laptop[0].name}
              </h1>
              <h1 className=" sm:text-3xl text-2xl ">
                Thương hiệu : {laptop[0].brand}
              </h1>
              <h1 className=" sm:text-3xl text-2xl font-bold ">
                Giá: 16.000.000
              </h1>
              <div className="flex justify-start items-center space-x-10">
                <button
                  onClick={() => setIsActive(!isActive)}
                  className={classNames(
                    "border-[1px]  px-4 sm:h-[50px] h-[35px] rounded-full  text-[18px]  ",
                    `${isActive ? "border-[#006aff] text-[#006aff] hover:bg-[#006aff] hover:text-white" : "border-[#cf0000]  bg-[#cf0000] text-white"}`
                  )}
                >
                  <span className="flex items-center">
                    <i className="bx bxs-cart-add sm:text-[25px] text-[20px] mr-4 "></i>
                    {isActive ? "Thêm vào giỏ hàng" : "Xóa"}
                  </span>
                </button>
              </div>
            </div>
            {/* bảng thông số kĩ thuật laptop */}
            <div className="mt-10 space-y-5 flex-1">
              <div className="w-full p-4 border rounded-lg shadow-lg bg-gray-100">
                <h1 className="font-bold mb-5">Bảng thông số kĩ thuật</h1>
                <span className="flex flex-wrap gap-x-6 gap-y-2">
                  <span className="font-normal">
                    <strong>CPU:</strong> {laptop[0].CPU}
                  </span>
                  <span className="font-normal">
                    <strong>RAM:</strong> {laptop[0].RAM}
                  </span>
                  <span className="font-normal">
                    <strong>GPU:</strong> {laptop[0].GPU}
                  </span>
                  <span className="font-normal">
                    <strong>Storage:</strong> {laptop[0].Storage}
                  </span>
                  <span className="font-normal">
                    <strong>Screen Size:</strong> {laptop[0].Screen}
                  </span>
                  <span className="font-normal">
                    <strong>Resolution:</strong> {laptop[0].Resolution}
                  </span>
                  <span className="font-normal">
                    <strong>Time:</strong> {laptop[0].time}
                  </span>
                  <span className="font-normal">
                    <strong>Weight:</strong> {laptop[0].Weight}
                  </span>
                  <span className="font-normal">
                    <strong>Nhu cầu:</strong> {laptop[0].category}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* gợi ý */}
        <div>
          <SwiperLaptop
            text="SẢN PHẨM GỢI Ý"
            data={APILAPTOP.slice(0, 10)}
            sale={true}
          />
        </div>
      </LayoutCard>
    </div>
  );
}

export default Card;
