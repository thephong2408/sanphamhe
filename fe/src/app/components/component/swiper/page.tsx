// src/app/components/SwiperComponent.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./styles.scss";
import { Navigation, Autoplay } from "swiper/modules";

export default function Advertisement() {
  return (
    <div className=" flex flex-col sm:flex-row">
      {/* quảng cáo 1 */}
      <div className=" w-full rounded-xl overflow-hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <img
              src="https://cdn2.fptshop.com.vn/unsafe/768x0/filters:quality(100)/H1_1440x242_aeb25852de.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn2.fptshop.com.vn/unsafe/768x0/filters:quality(100)/H1_1440x242_ae6eecfcba.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn2.fptshop.com.vn/unsafe/768x0/filters:quality(100)/H1_1440x242_4f84e97197.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* quảng cáo 2 + 3 */}
      {/* <div className=" sm:h-[300px] h-auto flex flex-1 flex-col overflow-hidden"> */}
      {/* quảng cáo 2 */}
      {/* <div className="sm:h-[50%] h-[200px] bg-slate-100 overflow-hidden">
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
            <SwiperSlide>
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/laptop/laptop-khuyen-mai-1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/laptop/laptop-khuyen-mai-3.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/laptop/laptop-khuyen-mai-6.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div> */}
      {/* quảng cáo 3 */}
      {/* <div className="sm:h-[50%] h-[200px] bg-[#38d742] overflow-hidden mt-10">
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
            <SwiperSlide>
              <img
                src="https://cdn.tgdd.vn/Files/2022/08/08/1453871/man-hinh-may-tinh-do-phan-giai-4k-la-gi-thoi-diem-9.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.tgdd.vn/Files/2022/08/08/1453871/man-hinh-may-tinh-do-phan-giai-4k-la-gi-thoi-diem-6.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.tgdd.vn/Files/2022/08/08/1453871/man-hinh-may-tinh-do-phan-giai-4k-la-gi-thoi-diem-1.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div> */}
      {/* </div> */}
    </div>
  );
}
