// src/app/components/SwiperComponent.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import "./styles.scss";

export default function Advertisement() {
  return (
    <div className="bg-black flex flex-col sm:flex-row">
      {/* quảng cáo 1 */}
      <div className="sm:w-[60vw] w-full h-[300px] bg-slate-400 sm:block hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper h-full"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
      {/* quảng cáo 2 + 3 */}
      <div className="bg-red-600 sm:h-[300px] h-[200px] flex flex-col overflow-hidden">
        {/* quảng cáo 2 */}
        <div className="sm:h-[50%] h-[100px] bg-slate-100 overflow-hidden">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper h-full"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
        {/* quảng cáo 3 */}
        <div className="sm:h-[50%] h-[100px] bg-[#38d742] overflow-hidden">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper h-full"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
