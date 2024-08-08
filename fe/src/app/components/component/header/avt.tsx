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

function Avt() {
  const dispatch = useDispatch();
  const dataCart = useSelector((state: any) => state.dataCart.dataCart);
  const [data, setData] = useState<any>(dataCart);
  useEffect(() => {
    setData(dataCart);
  }, [dataCart]);

  console.log("dataCart", dataCart);
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
                { "text-red-500": showShopping, "text-black": !showShopping }
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
              <div className="rounded-lg overflow-hidden shadow-md bg-[#1a243d]  text-white p-5">
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
              <div className="bg-[#1a243d]  text-white p-5 flex justify-center items-center w-[300px] h-[300px] rounded-xl">
                không có sản phẩm nào
              </div>
            )}
          </div>
        )}
      </span>

      <span
        onMouseEnter={() => setShowUser(true)}
        onMouseLeave={() => setShowUser(false)}
        className="relative flex items-center h-full"
      >
        {/* khi có user */}
        <Avatar className="size-[35px] rounded-full overflow-hidden">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
        {/* khi không có user */}
        {/* <FaUserPlus
          className={classNames("size-[35px]", {
            "text-red-500": showUser,
            "text-black": !showUser,
          })}
        /> */}

        {/* Menu người dùng */}
        {showUser && (
          <div className="absolute sm:bottom-[0px] top-[35px] right-1/2 translate-x-1/2 pt-5 text-[18px]">
            <div className="bg-white w-[270px] sm:max-h-[400px] max-h-[200px] overflow-y-auto text-[#2f2f2f] rounded-lg overflow-hidden border-[1px] shadow-md ">
              <div className="relative w-full flex flex-col p-5">
                <ul className="w-full">
                  <li className="p-4 rounded-lg border-[#fff] hover:shadow-md hover:border-[#e5e5e5] hover:bg-[#e5e5e5] flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[18px] p-4 border-[1px] bg-[#ccc] rounded-full mr-3"
                    />
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <span className=" cursor-pointer">
                          Thông tin cá nhân
                        </span>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="p-0 m-0 overflow-hidden shadow-sm  rounded-lg bg-[#111828] text-white">
                        <span className="w-full flex flex-col">
                          <h1 className="p-5 text-3xl border-b-[1px] font-semibold ">
                            Thông tin cá nhân
                          </h1>
                          <ul className="p-0 m-0 ">
                            <li className=" border-b-2 p-5 border-gray-300 ">
                              <span className="font-medium w-[80px]">Tên:</span>{" "}
                              Phạm Thế Phong
                            </li>
                            <li className=" border-b-2 p-5 border-gray-300 ">
                              <span className="font-medium w-[80px]">
                                Gmail:
                              </span>{" "}
                              phong@gmail.com
                            </li>
                            <li className="  border-b-2 p-5 border-gray-300 ">
                              <span className="font-medium w-[80px]">SDT:</span>{" "}
                              0869039628
                            </li>
                          </ul>
                        </span>
                        <AlertDialogFooter className="p-5">
                          <AlertDialogCancel>
                            <button className=" p-6 text-[14px] text-black">
                              Đóng
                            </button>
                          </AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </li>

                  <Link href={"/login"}>
                    <li className="p-4 rounded-lg hover:shadow-md hover:border-[#e5e5e5] border-[#fff] hover:bg-[#e5e5e5] flex items-center space-x-2">
                      <FontAwesomeIcon
                        icon={faSignInAlt}
                        className="text-[18px] p-4 border-[1px] bg-[#ccc] rounded-full mr-3"
                      />
                      <span>Đăng nhập</span>
                    </li>
                  </Link>

                  <Link href={"/signuppage"}>
                    <li className="p-4 rounded-lg hover:shadow-md hover:border-[#e5e5e5] border-[#fff] hover:bg-[#e5e5e5] flex items-center space-x-2">
                      <FontAwesomeIcon
                        icon={faUserPlus}
                        className="text-[18px] p-4 border-[1px] bg-[#ccc] rounded-full mr-3"
                      />
                      <span>Đăng ký</span>
                    </li>
                  </Link>

                  <Link href={"/changepassword"}>
                    <li className="p-4 rounded-lg hover:shadow-md hover:border-[#e5e5e5] border-[#fff] hover:bg-[#e5e5e5] flex items-center space-x-2">
                      <FontAwesomeIcon
                        icon={faKey}
                        className="text-[18px] p-4 border-[1px] bg-[#ccc] rounded-full mr-3"
                      />

                      <span>Đổi mật khẩu</span>
                    </li>
                  </Link>
                  <Link href={"/"}>
                    <li className="p-4 rounded-lg hover:shadow-md hover:border-[#e5e5e5] border-[#fff] hover:bg-[#e5e5e5] flex items-center space-x-2">
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="text-[18px] p-4 border-[1px] bg-[#ccc] rounded-full mr-3"
                      />
                      <span>Đăng xuất</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        )}
      </span>
    </span>
  );
}

export default Avt;
