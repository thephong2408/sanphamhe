"use client";
import "boxicons/css/boxicons.min.css";
import classNames from "classnames";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { addToCart, removeFromCart } from "@/app/redux/slices/dataCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutCard from "@/app/Layouts/LayoutCard";
import SwiperLaptop from "@/app/components/component/swiper/swipelaptop";
import { usePathname } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function Card() {
  const dispatch = useDispatch();

  const dataCart = useSelector((state: any) => state.dataCart.dataCart);
  const data = useSelector((state: any) => state.dataDispart.dataDispart);
  const dataCard = useSelector((state: any) => state.dataCard.dataCard);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [prefer, setPrefer] = useState<boolean>(true);
  const [dataLaptop, setDataLaptop] = useState<any>([]);
  //hover hiện chữ trong button
  const [hover, setHover] = useState(false);
  const [secondHover, setSecondHover] = useState(false);
  //show alert
  const [showAlert, setShowAlert] = useState(false);
  // Lấy và giải mã phần cuối của pathname
  const router = usePathname();
  // Kiểm tra nếu pathname có giá trị và thực hiện tách và mã hóa
  const getLastPartOfPathname = () => {
    if (router) {
      const pathParts = router.split("/");
      const lastPart = pathParts[pathParts.length - 1];
      return decodeURIComponent(decodeURIComponent(lastPart)); // Mã hóa phần cuối của URL
    }
    return "";
  };

  const encodedPart = getLastPartOfPathname();
  console.log("encodedPart", encodedPart);
  useEffect(() => {
    setIsActive(dataCart.some((item: any) => item.name === encodedPart));
    setDataLaptop(
      data.filter((item: any) => item.category === dataCard.category)
    );
    console.log("dataLaptop", dataLaptop);
    console.log("dataCart", dataCart);
  }, [encodedPart]);

  const handleDispatchCard = () => {
    if (isActive) {
      dispatch(removeFromCart(dataCard));
    } else {
      dispatch(addToCart(dataCard));
      setShowAlert(true);

      // Hide the alert after 1 second
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
    setIsActive(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div>
      {/* alert */}
      {showAlert && (
        <div className="fixed top-[150px] left-1/2 translate-x-[-50%] translate-y-[-50%] z-[100] w-[500px] h-[70px] bg-[rgb(83,222,86)] shadow-lg rounded-lg flex justify-center items-center">
          <span className="flex items-center text-3xl font-medium text-white">
            <FontAwesomeIcon icon={faCheck} className="mr-4" /> Bạn đã thêm vào
            giỏ hàng thành công
          </span>
        </div>
      )}

      <div className="w-full lg:flex flex-row sm:mt-10 transition-all duration-300">
        {/* ảnh laptop */}
        <div className="lg:w-[30%] w-full lg:mb-0 mb-5  border-[1px] rounded-xl overflow-hidden">
          <div className="w-full flex justify-center items-center sm:max-h-[380px] overflow-hidden">
            <img
              src="https://laptop88.vn/media/product/pro_poster_8982.jpg"
              alt="Laptop"
            />
          </div>
        </div>
        <div className="flex-1 lg:ml-10 ml-0 flex-col justify-between sm:text-3xl text-xl">
          <div className="h-full flex flex-col justify-between xl:space-y-0 space-y-5">
            <span className="sm:text-5xl text-3xl font-medium">
              {dataCard.name}
            </span>
            <h1 className="sm:text-3xl text-2xl">
              Thương hiệu: {dataCard.brand}
            </h1>
            <div className="flex space-x-2 items-center">
              <FaStar className="sm:size-[25px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[25px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[25px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[25px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[25px] text-[15px] text-[#e4a43e]" />
              <span className=" sm:text-2xl text-xl mt-1">Review</span>
            </div>
            <h1 className="sm:text-4xl text-2xl font-medium">
              <span className="sm:text-3xl text-xl font-normal">Giá : </span>{" "}
              {formatPrice(dataCard.price)} VND
            </h1>
            <div className="flex justify-start items-center space-x-10">
              <button
                onClick={handleDispatchCard}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={classNames(
                  "border-[1px] px-4 w-[180px] sm:h-[45px] h-[35px] rounded-xl sm:text-[18px] text-[12px] border-[#006aff] bg-[#006aff] text-white transition-all duration-1000 ease-in-out transform flex justify-center items-center overflow-hidden"
                  // Adjusted the width for non-hover state to show the icon properly
                )}
              >
                <span className="flex items-center">
                  {/* Icon is always visible */}
                  {isActive ? (
                    <i className="bx bx-cart sm:text-[25px] text-[20px] "></i>
                  ) : (
                    <i className="bx bxs-cart-add sm:text-[25px] text-[20px] "></i>
                  )}
                  {/* Text visibility with delay */}
                  <span
                    className={classNames(
                      "transition-opacity duration-1000 ease-in-out ml-4"
                    )}
                  >
                    {isActive ? "Đã thêm" : "Thêm ngay"}
                  </span>
                </span>
              </button>

              <button
                onClick={() => setPrefer(!prefer)}
                onMouseEnter={() => {
                  setSecondHover(true);
                }}
                onMouseLeave={() => {
                  setSecondHover(false);
                }}
                className={classNames(
                  "border-[1px] px-4 sm:h-[45px] h-[35px] w-[180px] rounded-xl sm:text-[18px] text-[12px] transition-all duration-1000 ease-in-out transform flex justify-center items-center overflow-hidden bg-[#e64062] text-white"

                  // Adjusted width for hover state
                )}
              >
                <span className="flex items-center">
                  {prefer ? (
                    <FaHeart className="sm:text-[25px] text-[20px]" />
                  ) : (
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="sm:text-[25px] text-[20px]"
                    />
                  )}
                  <span
                    className={classNames(
                      "transition-opacity duration-1000 ease-in-out ml-4"
                      // Example text opacity change
                    )}
                  >
                    {prefer ? "Yêu thích" : "Bỏ yêu thích"}
                  </span>
                </span>
              </button>
            </div>
            <div className="xl:mt-0 mt-10 sm:space-y-0 space-y-5">
              <div className="w-full p-4 border rounded-lg shadow-lg bg-gray-100 text-gray-800">
                {/* bảng thông số kỹ thuật laptop */}
                <h1 className="font-bold mb-5">Bảng thông số kỹ thuật</h1>
                <span className="flex flex-wrap gap-x-6 gap-y-2">
                  <span className="font-normal">
                    <strong>CPU:</strong> {dataCard.CPU}
                  </span>
                  <span className="font-normal">
                    <strong>RAM:</strong> {dataCard.RAM}
                  </span>
                  <span className="font-normal">
                    <strong>GPU:</strong> {dataCard.GPU}
                  </span>
                  <span className="font-normal">
                    <strong>Storage:</strong> {dataCard.Storage}
                  </span>
                  <span className="font-normal">
                    <strong>Screen Size:</strong> {dataCard.Screen}
                  </span>
                  <span className="font-normal">
                    <strong>Resolution:</strong> {dataCard.Resolution}
                  </span>
                  <span className="font-normal">
                    <strong>Time:</strong> {dataCard.time}
                  </span>
                  <span className="font-normal">
                    <strong>Weight:</strong> {dataCard.Weight}
                  </span>
                  <span className="font-normal">
                    <strong>Nhu cầu:</strong> {dataCard.category}
                  </span>
                </span>
              </div>
            </div>
            <div className="sm:text-2xl p-4 rounded-xl dark:bg-[#423e3d] bg-[#3e94d4] text-white text-xl">
              Cam kết được bảo hành 12 tháng, đổi 1 - 1 nếu phát lỗi trong vòng
              3 tháng test máy
            </div>{" "}
          </div>
        </div>
      </div>
      {/* gợi ý */}
      <div>
        <SwiperLaptop
          text="SẢN PHẨM GỢI Ý"
          data={dataLaptop.slice(0, 10)}
          sale={true}
        />
      </div>
    </div>
  );
}

export default Card;
