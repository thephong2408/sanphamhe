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
import Card from "../card/card";
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
  sale?: boolean;
  data?: any;
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
  sale = false,
  data = [],
}) => {
  return (
    <div
      className={` transform-allow  rounded-xl  my-10 `}
      style={{ width: widthCard }}
    >
      <div className="sm:pb-10">
        <Link href={"/sale"}>
          <span className={` sm:text-4xl text-2xl font-medium`}>{text}</span>
        </Link>
        <div className="mt-5">
          <Swiper
            spaceBetween={10}
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
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper h-full"
          >
            {data.map((item: any, index: number) => (
              <SwiperSlide
                key={index}
                className="pl-0 min-w-[130px] max-w-[350px]"
              >
                <Card sale={sale} data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperLaptop;
