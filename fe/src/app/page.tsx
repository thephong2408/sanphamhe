import Layout1 from "./Layouts/Layout1";
import SwiperLaptop from "./components/component/swiper/swipelaptop";
import SearchLaptop from "./components/component/searchLaptop/searchLaptop";
function Home() {
  return (
    <div>
      <Layout1>
        <SwiperLaptop
          text="SẢN PHẨM KHUYẾN MÃI"
          text_white="white"
          bgood="#d0011b"
          widthCard="full"
          slidesPerView={2}
          slidesPerView2={2}
          slidesPerView3={3}
          slidesPerView4={4}
          slidesPerView5={5}
          width="100%"
          show={true}
          sale={true}
        />
        <div className="sm:flex justify-between">
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
            />
          </div>
        </div>
        <SearchLaptop />
      </Layout1>
    </div>
  );
}

export default Home;
