"use client";
import Layout1 from "./Layouts/Layout1";
import SwiperLaptop from "./components/component/swiper/swipelaptop";
import SearchLaptop from "./components/component/searchLaptop/searchLaptop";
import APILAPTOP from "./API/APILAPTOP";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataDispart } from "./redux/slices/dataDispart";
import useDispartData from "./useDispartData";

function Home() {
  const { data, loading, error } = useDispartData();
  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <Layout1>
        <SwiperLaptop
          text="SẢN PHẨM KHUYẾN MÃI"
          widthCard="full"
          slidesPerView={2}
          slidesPerView2={2}
          slidesPerView3={3}
          slidesPerView4={4}
          slidesPerView5={5}
          width="100%"
          show={true}
          sale={true}
          data={data.slice(0, 10)}
        />
        {/* <div className="sm:flex justify-between">
          <div className="sm:w-[49%] w-full">
            <SwiperLaptop
              text="SẢN PHẨM MỚI NHẤT"
              slidesPerView={2}
              slidesPerView2={2}
              slidesPerView3={2}
              slidesPerView4={2}
              slidesPerView5={2}
              width="100%"
              show={false}
              sale={false}
              data={data.slice(5, 10)}
            />
          </div>
          <div className="sm:w-[49%] w-full">
            <SwiperLaptop
              text="SẢN PHẨM BÁN CHẠY NHẤT"
              slidesPerView={2}
              slidesPerView2={2}
              slidesPerView3={2}
              slidesPerView4={2}
              slidesPerView5={2}
              width="100%"
              show={false}
              sale={false}
              data={data.slice(4, 9)}
            />
          </div>
        </div> */}
        <SearchLaptop />
      </Layout1>
    </div>
  );
}

export default Home;
