"use client";

import "boxicons/css/boxicons.min.css";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ImFrustrated } from "react-icons/im";

import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { FaUserPlus } from "react-icons/fa";

import { useState, useEffect } from "react";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSignInAlt,
  faUser,
  faUserPlus,
  faSignOutAlt,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { PiShoppingCart } from "react-icons/pi";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/app/redux/slices/dataCart";
import { setDataCard } from "@/app/redux/slices/dataCard";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { clearDataPhone } from "@/app/redux/slices/dataDispart";
import { clearCart } from "@/app/redux/slices/dataCart";

function Avt() {
  // dữ liệu nhận được khi đã đăng nhập
  const dataPhone = useSelector((state: any) => state.dataDispart.dataPhone);

  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [storedPhone, setStoredPhone] = useState<string>("");

  const router = useRouter();

  // Kiểm tra nếu mã chạy trên client-side
  useEffect(() => {
    setStoredPhone(dataPhone);
  }, [dataPhone]); // Chạy chỉ một lần sau khi component mount
  // Chạy một lần khi component mount

  useEffect(() => {
    setShowLogin(storedPhone.length > 0);
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [storedPhone]);
  // Xử lý đăng xuất
  const handleLogout = () => {
    setStoredPhone("");
    setShowLogin(false);
    dispatch(setDataCard([]));
    dispatch(clearDataPhone());
    dispatch(clearCart());
    localStorage.removeItem("phone");
    router.push("/login");
  };

  // chuyền dữ liệu
  const dispatch = useDispatch();
  const dataCart = useSelector((state: any) => state.dataCart.dataCart);
  const [data, setData] = useState<any>(dataCart);
  useEffect(() => {
    setData(dataCart);
  }, [dataCart]);

  // console.log("dataCart", dataCart);
  const [showShopping, setShowShopping] = useState<boolean>(false);
  const [showUser, setShowUser] = useState<boolean>(false);
  const formatPrice = (price: number | undefined) => {
    if (price === undefined) {
      return ""; // hoặc giá trị mặc định khác
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const handleCard = (index: number) => {
    dispatch(setDataCard(dataCart[index]));
  };
  const handleRemove = (item: any) => {
    dispatch(removeFromCart(item.id));
    setData(dataCart);
  };

  // đăng xuất thì xóa biến toàn cục

  return (
    <span className="items-center xl:flex hidden z-50 h-full">
      <span
        onMouseEnter={() => setShowShopping(true)}
        onMouseLeave={() => setShowShopping(false)}
        className="relative"
      >
        <span className="relative">
          <Link href={"/cart"}>
            <PiShoppingCart
              className={classNames(
                "sm:size-[35px] size-[25px] ml-5 sm:block hidden mr-10",
                { "text-red-500": showShopping, "": !showShopping }
              )}
            />
          </Link>
          <div className="w-[20px] text-white h-[20px] bg-red-500 rounded-full absolute top-[-2px] font-medium right-[17px] flex items-center justify-center">
            {dataCart.length}
          </div>
        </span>

        {/* Giỏ hàng */}
        {showShopping && (
          <div className="absolute sm:bottom-[0px] top-[35px] z-50 right-0 pt-5">
            {data.length > 0 ? (
              <div className="rounded-lg overflow-hidden shadow-md dark:bg-[#1a243d] bg-white  dark:text-white p-5">
                <Link href={"/cart"}>
                  <div
                    onClick={() => setShowShopping(false)}
                    className="h-[40px] text-3xl w-full   flex pl-2 items-center border-b-[1px] border-[#ccc] cursor-pointer"
                  >
                    <span className="w-full">Xem tất cả </span>
                  </div>
                </Link>
                <div className="relative rounded-sm w-[400px] sm:max-h-[400px] max-h-[200px] overflow-y-auto    p-2 ">
                  {dataCart.map((item: any, index: number) => (
                    <div key={index}>
                      <div
                        onClick={() => setShowShopping(false)}
                        className="relative w-full sm:h-[100px] h-[70px] py-2 flex justify-between pr-20 "
                      >
                        <div
                          onClick={() => handleCard(index)}
                          className="h-full sm:w-[80px] w-[50px] "
                        >
                          <Link href={`/card/${item.name}`}>
                            <img
                              src="https://laptop88.vn/media/product/pro_poster_8407.jpg"
                              alt="sp"
                            />
                          </Link>
                        </div>
                        <div className="flex-1 flex flex-col overflow-y-auto px-4">
                          <span className="w-full break-words font-medium">
                            {item.name}
                          </span>
                          <span className="w-full break-words text-[13px] ">
                            {item.CPU} {item.RAM} {item.GPU} {item.Storage}{" "}
                            {item.Weight}
                          </span>
                          <span className="w-full font-medium">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                        <button
                          onClick={() => handleRemove(item)}
                          className="absolute text-[12px] w-[45px] border-none py-1 bg-white border-[1px] bottom-2 right-0 text-[#ff4343]  hover:bg-[#ff4343] hover:text-[#ffffff] rounded-lg"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-[#1a243d]   text-white p-5 flex flex-col justify-center items-center w-[300px] h-[300px] rounded-xl">
                <div className="size-[100px] border-none bg-transparent">
                  {" "}
                  <img
                    src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg"
                    alt=""
                  />
                </div>
                <span className="w-full text-center mt-5 ">
                  Không có sản phẩm nào
                </span>
              </div>
            )}
          </div>
        )}
      </span>
      {/* khi không có user */}
      {dataPhone == 0 && (
        <span className="flex items-center h-full">
          <div className="flex space-x-5 ">
            <Link href={"/login"}>
              <button className="border-[1px] py-3 text-white  bg-[#3e94d4] font-normal rounded-xl w-[100px]">
                Đăng nhâp
              </button>{" "}
            </Link>
            <Link href={"/signuppage"}>
              <button className="border-[1px] py-3 text-white  bg-[#3e94d4] font-normal rounded-xl w-[100px]">
                Đăng Kí
              </button>
            </Link>
          </div>
        </span>
      )}

      <span
        onMouseEnter={() => setShowUser(true)}
        onMouseLeave={() => setShowUser(false)}
        className="relative flex items-center h-full"
      >
        {/* khi có user */}
        {showLogin && (
          <Avatar className="size-[35px] rounded-full flex justify-center items-center overflow-hidden">
            {!loading ? (
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            ) : (
              <ImFrustrated className="size-[30px]" />
            )}
          </Avatar>
        )}

        {/* Menu người dùng */}

        {showUser && (
          <div className="absolute sm:bottom-[0px] top-[35px] right-1/2 translate-x-1/2 pt-5 text-[18px]">
            <div className="bg-white dark:bg-[#1a243d] w-[270px] border-[1px] overflow-y-auto p-3 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <Avatar className="size-[80px] rounded-full flex justify-center items-center overflow-hidden">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <span className="text-xl font-semibold mt-3">
                  {storedPhone}
                </span>
              </div>

              <div className="flex flex-col mt-5 text-[18px]">
                <Link href={"/myorder"}>
                  <button
                    className="mb-2 text-[15px] p-3 border-[1px] rounded-2xl dark:border-white"
                    onClick={() => setShowUser(false)}
                  >
                    <FontAwesomeIcon className="mr-2" icon={faCartShopping} />
                    Đơn hàng của tôi
                  </button>
                </Link>

                <button
                  className="mb-2 text-[15px] p-3 border-[1px] rounded-2xl dark:border-white"
                  onClick={() => setShowUser(false)}
                >
                  <Link href={"/changepassword"}>
                    <FontAwesomeIcon icon={faKey} className=" mr-2" />
                    Đổi mật khẩu
                  </Link>
                </button>
                <button
                  className="mb-2 text-[15px] p-3 border-[1px] rounded-2xl dark:border-white"
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>
        )}
      </span>
    </span>
  );
}

export default Avt;
