"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import LayoutCard from "@/app/Layouts/LayoutCard";
import SwiperLaptop from "@/app/components/component/swiper/swipelaptop";
import APILAPTOP from "@/app/API/APILAPTOP";
function Card() {
  const params = useParams();
  const encodedType = params.type as string;

  // Giải mã URL
  const type = decodeURIComponent(encodedType);

  const [laptop, setLaptop] = useState(APILAPTOP);

  useEffect(() => {
    setLaptop(APILAPTOP.filter((item) => item.name === type));
  }, [APILAPTOP]);

  console.log(type + ": " + laptop); // Kết quả: HP Omen 15
  return (
    <div>
      <LayoutCard>
        <div className="w-full lg:flex flex-row">
          <div className="lg:w-[50%] w-full lg:mb-0 mb-5">
            <div className="w-full flex flex-col">
              <img
                src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
                alt=""
              />
            </div>
            <div className=" hidden lg:flex lg:justify-between mt-10 space-x-10">
              <div className="w-[50%]">
                <img
                  src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
                  alt=""
                />
              </div>
              <div className="w-[50%]">
                <img
                  src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full lg:ml-10 ml-0 space-y-5 sm:text-3xl text-xl">
            <h1 className="sm:text-4xl text-3xl font-bold ">
              {laptop[0].name}
            </h1>
            <h1 className=" sm:text-3xl text-2xl ">
              Thương hiệu : {laptop[0].brand}
            </h1>
            <div className="flex justify-start items-center space-x-10">
              <h1 className="text-red-600 sm:text-4xl text-3xl font-bold ">
                {laptop[0].price}
              </h1>
              <button className="border-[1px] border-[#2f7adf] text-[#2f7adf] p-4 rounded-lg hover:bg-[#2f7adf] hover:text-white">
                Mua ngay
              </button>
            </div>
            <button className="border-[1px] border-[red] text-[red] p-4 rounded-lg hover:bg-[red] hover:text-white">
              <i className="bx bxs-cart-add sm:text-[30px] text-[20px] mr-4 "></i>
              Thêm giỏ hàng
            </button>
            <div className="sm:flex flex-row justify-between">
              <div className="sm:text-2xl text-xl p-3 rounded-lg bg-red-600 text-white text-center sm:w-[300px] w-full">
                Đã bao gồm phí VAT
              </div>
              <div className="sm:text-2xl text-xl p-3 sm:mt-0 mt-3 rounded-lg bg-red-600 text-white text-center sm:w-[300px] w-full ">
                Bảo hành chính hãng 12 tháng
              </div>
            </div>
            <h1 className="font-bold">Bảng thông số kĩ thuật</h1>
            <div>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="border-[2px] p-2">CPU</td>
                    <td className="border-[2px] p-2">{laptop[0].CPU}</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">RAM</td>
                    <td className="border-[2px] p-2">{laptop[0].RAM}</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">GPU</td>
                    <td className="border-[2px] p-2">{laptop[0].GPU}</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Storage</td>
                    <td className="border-[2px] p-2">{laptop[0].Storage}</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Screen Size</td>
                    <td className="border-[2px] p-2">{laptop[0].Screen}</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Resolution</td>
                    <td className="border-[2px] p-2">{laptop[0].Resolution}</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Time</td>
                    <td className="border-[2px] p-2">{laptop[0].time}</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Weight</td>
                    <td className="border-[2px] p-2">{laptop[0].Weight}</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Nhu cầu</td>
                    <td className="border-[2px] p-2">{laptop[0].category}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* gợi ý */}
        <div>
          <SwiperLaptop text="SẢN PHẨM GỢI Ý" />
        </div>
      </LayoutCard>
    </div>
  );
}

export default Card;
