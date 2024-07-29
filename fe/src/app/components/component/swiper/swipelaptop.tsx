// components/component/swiper/SwiperLaptop.tsx

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./styles.scss";
import { Navigation, Autoplay } from "swiper/modules";
import classNames from "classnames";
import Link from "next/link";

interface SwiperLaptopProps {
  text?: string;
  text_white?: string;
  bgood?: string;
  widthCard?: string;
  slidesPerView?: number;
  slidesPerView2?: number;
  slidesPerView3?: number;
  slidesPerView4?: number;
  slidesPerView5?: number;
  width?: string;
  show?: boolean;
}

const SwiperLaptop: React.FC<SwiperLaptopProps> = ({
  text = "SẢN PHẨM KHUYẾN MÃI",
  text_white = "black",
  bgood = "white",
  widthCard = "full",
  slidesPerView = 2,
  slidesPerView2 = 2,
  slidesPerView3 = 3,
  slidesPerView4 = 4,
  slidesPerView5 = 5,
  show = false,
  width = "100%",
}) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div
      className={` transform-allow sm:p-10 p-5 rounded-xl  my-10 border-${bgood} border-[1px]`}
      style={{ backgroundColor: bgood, width: widthCard }}
    >
      <div className="pb-10">
        <span className={`text-${text_white} sm:text-4xl text-2xl font-bold`}>
          {text}
        </span>
        <div className="mt-5">
          <Swiper
            spaceBetween={20}
            slidesPerView={slidesPerView}
            breakpoints={{
              640: {
                slidesPerView: slidesPerView2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: slidesPerView3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: slidesPerView4,
              },
              1224: {
                slidesPerView: slidesPerView5,
              },
            }}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper h-full"
          >
            {arr.map((item, index) => (
              <SwiperSlide
                key={index}
                className="pl-0 min-w-[130px] max-w-[350px]"
              >
                <Link href={"/card"}>
                  <div
                    className={classNames(
                      "w-full h-full hover:shadow-md border-[1px] cursor-pointer"
                    )}
                  >
                    <div
                      className="w-full h-[70%] bg-slate-400 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://mega.com.vn/media/news/2905_hinh-nen-may-tinh-sieu-de-thuong.jpg')",
                      }}
                    >
                      <img
                        className="hover:opacity-0"
                        alt="img"
                        src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
                      />
                    </div>
                    <div className="bg-white p-2">
                      <span className="block text-ellipsis line-clamp-2 w-full mb-5">
                        Laptop Gaming Asus TUF A15 FA507NU LP131W R5 7
                      </span>
                      <span className={`text-red-600 w-full text-center`}>
                        14 000 000
                      </span>
                      <nav className="flex justify-between w-full mt-3">
                        <ul>
                          <li>thông số 1</li>
                          <li>thông số 1</li>
                        </ul>
                        <ul>
                          <li>thông số 1</li>
                          <li>thông số 1</li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {show && (
        <button className="w-[150px] py-2 text-red-600 hover:text-white border-[1px] hover:border-[red] bg-white hover:bg-[red] m-auto rounded-md">
          Xem Tất cả
        </button>
      )}
    </div>
  );
};

export default SwiperLaptop;
