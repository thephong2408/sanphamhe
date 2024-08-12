"use client";
import Layout1 from "./Layouts/Layout1";
import SwiperLaptop from "./components/component/swiper/swipelaptop";
import SearchLaptop from "./components/component/searchLaptop/searchLaptop";
import APILAPTOP from "./API/APILAPTOP";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataDispart } from "./redux/slices/dataDispart";

import axios from "axios";

function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState<any>([]);
  const [data1, setData1] = useState<any>([]);
  const [data2, setData2] = useState<any>([]);

  // useEffect(() => {
  //   setData(APILAPTOP);
  //   // dispatch(setDataDispart(APILAPTOP));
  // }, []);
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response1 = await axios.get(
          "http://127.0.0.1:8000/api/get-laptops"
        );

        dispatch(setDataDispart(response1.data));

        setData1(response1.data);
        console.log(response1.data), "data API";
      } catch (error) {
        console.error("Có lỗi xảy ra!", error);
      }
    };

    fetchData1();
  }, []);
  console.log("dữ liệu nhận đc", data1);

  // lấy data từ be

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
          data={data1.slice(0, 10)}
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
