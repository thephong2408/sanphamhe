"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { addToCart, removeFromCart } from "@/app/redux/slices/dataCart";
import LayoutCard from "@/app/Layouts/LayoutCard";
import SwiperLaptop from "@/app/components/component/swiper/swipelaptop";
import APILAPTOP from "@/app/API/APILAPTOP";

function Card() {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.dataCard.dataCard);
  const dataCart = useSelector((state: any) => state.dataCart.dataCart);

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      setIsActive(dataCart.some((item: any) => item.name === data.name));
    }
  }, [dataCart, data]);

  const handleDispatchCard = () => {
    if (isActive) {
      dispatch(removeFromCart(data));
    } else {
      dispatch(addToCart(data));
      console.log("data", data);
    }
    setIsActive(!isActive);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div>
      <LayoutCard>
        <div className="w-full lg:flex flex-row sm:mt-10">
          {/* ảnh laptop */}
          <div className="lg:w-[50%] w-full lg:mb-0 mb-5 ">
            <div className="w-full flex justify-center items-center sm:max-h-[380px] overflow-hidden">
              <img
                src="https://laptop88.vn/media/product/pro_poster_8982.jpg"
                alt="Laptop"
              />
            </div>
          </div>
          <div className="flex-1 lg:ml-10 ml-0 flex-col justify-between sm:text-3xl text-xl">
            <div className="h-full flex flex-col justify-between xl:space-y-0 space-y-5">
              <h1 className="sm:text-4xl text-3xl font-bold">{data.name}</h1>
              <div className="flex space-x-2 mt-3 items-center">
                <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]" />
                <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]" />
                <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]" />
                <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]" />
                <FaStar className="sm:size-[20px] text-[15px] text-[#e4a43e]" />
                <span className="text-[#959595] sm:text-2xl text-xl mt-1">
                  Review
                </span>
              </div>
              <h1 className="sm:text-3xl text-2xl">
                Thương hiệu: {data.brand}
              </h1>
              <h1 className="sm:text-3xl text-2xl font-bold">
                {formatPrice(data.price)}
              </h1>
              <div className="flex justify-start items-center space-x-10">
                <button
                  onClick={handleDispatchCard}
                  className={classNames(
                    "border-[1px] px-4 sm:h-[50px] h-[35px] rounded-full text-[18px]",
                    isActive
                      ? "border-[#188b10] bg-[#188b10] text-white"
                      : "border-[#006aff] text-[#006aff] hover:bg-[#006aff] hover:text-white"
                  )}
                >
                  <span className="flex items-center">
                    {isActive ? (
                      <i className="bx bx-cart sm:text-[25px] text-[20px] mr-4"></i>
                    ) : (
                      <i className="bx bxs-cart-add sm:text-[25px] text-[20px] mr-4"></i>
                    )}
                    {isActive ? "Đã thêm" : "Thêm vào giỏ hàng"}
                  </span>
                </button>
              </div>
              <div className="xl:mt-0 mt-10 sm:space-y-0 space-y-5">
                <div className="w-full p-4 border rounded-lg shadow-lg bg-gray-100">
                  {/* bảng thông số kỹ thuật laptop */}
                  <h1 className="font-bold mb-5">Bảng thông số kỹ thuật</h1>
                  <span className="flex flex-wrap gap-x-6 gap-y-2">
                    <span className="font-normal">
                      <strong>CPU:</strong> {data.CPU}
                    </span>
                    <span className="font-normal">
                      <strong>RAM:</strong> {data.RAM}
                    </span>
                    <span className="font-normal">
                      <strong>GPU:</strong> {data.GPU}
                    </span>
                    <span className="font-normal">
                      <strong>Storage:</strong> {data.Storage}
                    </span>
                    <span className="font-normal">
                      <strong>Screen Size:</strong> {data.Screen}
                    </span>
                    <span className="font-normal">
                      <strong>Resolution:</strong> {data.Resolution}
                    </span>
                    <span className="font-normal">
                      <strong>Time:</strong> {data.time}
                    </span>
                    <span className="font-normal">
                      <strong>Weight:</strong> {data.Weight}
                    </span>
                    <span className="font-normal">
                      <strong>Nhu cầu:</strong> {data.category}
                    </span>
                  </span>
                </div>
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
