"use client";
import "boxicons/css/boxicons.min.css";
import LayoutCard from "@/app/Layouts/LayoutCard";
import SwiperLaptop from "@/app/components/component/swiper/swipelaptop";
function Card() {
  return (
    <div>
      <LayoutCard>
        <div className="w-full sm:flex flex-row">
          <div className="md:w-[50%] w-full sm:mb-0 mb-5">
            <img
              src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
              alt=""
            />
          </div>
          <div className="md:w-[50%] w-full sm:ml-10 ml-0 space-y-5 sm:text-3xl text-xl">
            <h1 className="sm:text-4xl text-3xl font-bold ">
              Laptop Gaming HP VICTUS 15 fa1155TX 952R1PA i5
              12450H/8GB/512GB/15.6F 144Hz/RTX2050 4GB/Win11
            </h1>
            <h1 className=" sm:text-3xl text-2xl ">Thương hiệu : HP</h1>
            <div className="flex justify-start items-center space-x-10">
              <h1 className="text-red-600 sm:text-4xl text-3xl font-bold ">
                {" "}
                GIÁ : 14 000 000
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
                    <td className="border-[2px] p-2">Intel Core i7-13700K</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">RAM</td>
                    <td className="border-[2px] p-2">16GB DDR5</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">GPU</td>
                    <td className="border-[2px] p-2">
                      NVIDIA GeForce RTX 3060
                    </td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Storage</td>
                    <td className="border-[2px] p-2">1TB SSD</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Screen Size</td>
                    <td className="border-[2px] p-2">15.6 inches</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Resolution</td>
                    <td className="border-[2px] p-2">1920 x 1080</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Battery Life</td>
                    <td className="border-[2px] p-2">8 hours</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Weight</td>
                    <td className="border-[2px] p-2">2.2 kg</td>
                  </tr>
                  <tr>
                    <td className="border-[2px] p-2">Operating System</td>
                    <td className="border-[2px] p-2">Windows 11</td>
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
