"use client";
import "boxicons/css/boxicons.min.css";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { addToCart, removeFromCart } from "@/app/redux/slices/dataCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwiperLaptop from "@/app/components/component/swiper/swipelaptop";
import { usePathname } from "next/navigation";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { setDataListCart } from "@/app/redux/slices/dataDispart";
import axios from "axios";

function Card() {
  const dispatch = useDispatch();
  const router1 = useRouter();

  const dataCart = useSelector((state: any) => state.dataCart.dataCart);
  const id = useSelector((state: any) => state.dataDispart.dataId);
  const data = useSelector((state: any) => state.dataDispart.dataDispart);
  const dataCard = useSelector((state: any) => state.dataCard.dataCard);
  const [loading, setLoading] = useState<boolean>(true);
  const [data1, setData] = useState<any>([]);

  const dataListCart = useSelector(
    (state: any) => state.dataDispart.dataListCart
  );
  // console.log("dataListCart", dataListCart);

  const [dataLaptop, setDataLaptop] = useState<any>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [check, setCheck] = useState<boolean>(false);
  const userId = useSelector((state: any) => state.dataDispart.dataId);

  // Hàm tăng giá trị
  const increment = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  // Hàm giảm giá trị
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Lấy và giải mã phần cuối của pathname
  const router = usePathname();
  const getLastPartOfPathname = () => {
    if (router) {
      const pathParts = router.split("/");
      const lastPart = pathParts[pathParts.length - 1];
      return decodeURIComponent(decodeURIComponent(lastPart));
    }
    return "";
  };

  const encodedPart = getLastPartOfPathname();

  useEffect(() => {
    // Ensure dataListCart is an array
    const isProductInCart =
      Array.isArray(dataListCart) &&
      dataListCart.some((item: any) => item.id_product === dataCard.id);
    setCheck(isProductInCart);

    setDataLaptop(
      Array.isArray(data)
        ? data.filter((item: any) => item.category === dataCard.category)
        : []
    );
  }, [encodedPart, dataCart, dataCard, dataListCart]);

  const handleDispatchCard = async () => {
    if (check) {
      dispatch(removeFromCart(dataCard));
    } else {
      dispatch(addToCart(dataCard));

      setShowAlert(true);

      const dataDisplayAPI = {
        id_user: id,
        id_product: dataCard.id,
        quantity: quantity,
      };

      try {
        // Thêm sản phẩm vào giỏ hàng
        await axios.post("http://127.0.0.1:8000/api/add-cart", dataDisplayAPI, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Lấy danh sách giỏ hàng mới
        const response = await axios.post(
          "http://127.0.0.1:8000/api/get-cart",
          { id: userId }
        );

        dispatch(setDataListCart(response.data));
      } catch (error) {
        console.error("Error sending data:", error);
      }

      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/get-cart",
          { id: userId }
        );

        dispatch(setDataListCart(response.data));
      } catch (error) {
        console.log("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, userId]);

  useEffect(() => {
    setData(dataCart);
  }, [dataCart]);

  const handleCart = async () => {
    const dataDisplayAPI = {
      id_user: id,
      id_product: dataCard.id,
      quantity: quantity,
    };
    try {
      // Thêm sản phẩm vào giỏ hàng
      await axios.post("http://127.0.0.1:8000/api/add-cart", dataDisplayAPI, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Lấy danh sách giỏ hàng mới
      const response = await axios.post("http://127.0.0.1:8000/api/get-cart", {
        id: userId,
      });

      dispatch(setDataListCart(response.data));
    } catch (error) {
      console.error("Error sending data:", error);
    }
    router1.push("/cart");
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
          <div className="w-full h-full flex justify-center items-center  overflow-hidden">
            <img
              src="https://laptop88.vn/media/product/pro_poster_8982.jpg"
              alt="Laptop"
            />
          </div>
        </div>
        <div className="flex-1 lg:ml-10 ml-0  flex-col justify-between sm:text-3xl text-xl">
          <span className="sm:text-5xl text-3xl font-medium">
            {dataCard.name}
          </span>
          <div className="h-full mt-10 flex flex-col justify-start xl:space-y-5 space-y-5">
            <h1 className="sm:text-3xl text-2xl">
              Thương hiệu: {dataCard.brand}
            </h1>
            <div className="flex space-x-2 items-center">
              <FaStar className="sm:size-[25px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[25px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[25px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[25px] text-[15px] text-[#e4a43e]" />
              <FaStar className="sm:size-[25px] text-[15px] text-[#e4a43e]" />
              <span className=" sm:text-2xl text-xl mt-1 text-[#919191] ">
                (Review)
              </span>
            </div>
            <h1 className="sm:text-4xl text-2xl font-medium">
              <span className="sm:text-3xl text-xl font-normal">Giá : </span>{" "}
              {formatPrice(dataCard.price)} VND
            </h1>

            {/* button và hàm tăng giá trị */}

            <div className="flex flex-col space-y-5 sm:w-[400px] text-black ">
              <div className="flex h-[40px] justify-between items-center  sm:text-[18px]">
                <span className="text-[#919191]">Số lượng</span>
                <span className="flex h-full border-[1px]">
                  <button
                    className="sm:w-[40px] w-[30px] h-full border-r-[1px] bg-gray-200 sm:text-[18px]"
                    onClick={increment}
                  >
                    +
                  </button>
                  <button
                    className="sm:w-[70px] w-[50px] h-full bg-gray-100 text-[20px]"
                    disabled
                  >
                    {quantity}
                  </button>
                  <button
                    className="sm:w-[40px] w-[30px] h-full border-l-[1px] bg-gray-200 sm:text-[18px]"
                    onClick={decrement}
                  >
                    -
                  </button>
                </span>
                <span className="text-[#919191]">8898 sản phẩm</span>
              </div>
              <div className="flex justify-between items-center  ">
                <button
                  onClick={handleDispatchCard}
                  className={classNames(
                    "border-[1px] px-4 sm:w-[180px] w-[120px] sm:h-[45px] h-[35px] rounded-md sm:text-[18px] text-[12px] border-[#ff6739] bg-[#f8ebe2] text-[#ff6739] "
                    // Adjusted the width for non-hover state to show the icon properly
                  )}
                >
                  <span className="flex items-center">
                    {/* Icon is always visible */}
                    {check ? (
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
                      {check ? "Đã thêm" : "Thêm ngay"}
                    </span>
                  </span>
                </button>

                <button
                  onClick={handleCart}
                  className={classNames(
                    "border-[1px] px-4 sm:h-[45px] h-[35px] sm:w-[180px] w-[120px] rounded-md sm:text-[18px] text-[12px]  bg-[#ff481f] text-[#ffffff] border-[#e64062]"

                    // Adjusted width for hover state
                  )}
                >
                  Mua ngay
                </button>
              </div>
            </div>
            <div className="xl:mt-0 mt-10 sm:space-y-0">
              <div className="w-full p-4 border rounded-lg shadow-lg bg-gray-100 text-gray-800  space-y-5">
                {/* bảng thông số kỹ thuật laptop */}
                <h1 className="font-bold mb-5">Bảng thông số kỹ thuật</h1>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:text-2xl p-4 mt-10 rounded-xl dark:bg-[#423e3d] bg-[#3e94d4] text-white text-xl">
        Cam kết được bảo hành 12 tháng, đổi 1 - 1 nếu phát lỗi trong vòng 3
        tháng test máy
      </div>{" "}
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
