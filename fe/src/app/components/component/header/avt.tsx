"use client";
import "boxicons/css/boxicons.min.css";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Avt() {
  const [showShopping, setShowShopping] = useState<boolean>(false);
  const [showUser, setShowUser] = useState<boolean>(false);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <span className="items-center xl:flex hidden z-50">
      <span
        onMouseEnter={() => setShowShopping(true)}
        onMouseLeave={() => setShowShopping(false)}
        className="relative"
      >
        <FontAwesomeIcon
          className="text-[#ffffff] sm:size-[40px] size-[25px] ml-5 sm:block hidden mr-10 hover:text-[#ff3e3e]"
          icon={faCartShopping}
        />
        {/* Giỏ hàng */}
        {showShopping && (
          <div className="absolute sm:bottom-[0px] top-[35px] right-0 pt-5">
            <div className="border-[1px] border-[#959595]">
              <div
                onClick={() => setShowShopping(false)}
                className=" h-[40px] text-3xl w-full bg-[rgb(255,93,93)] flex pl-2 items-center"
              >
                <Link href={"/cart"}>
                  <button className="w-full">Xem tất cả </button>
                </Link>
              </div>
              <div className="relative rounded-sm w-[400px] sm:max-h-[400px] max-h-[200px] overflow-y-auto  border-[#959595] bg-[#ffffff] text-[#000] px-2 ">
                {/* giỏ hàng không có sản phẩm */}
                {/* <div className="w-full h-[300px] flex items-center justify-center">
                không có sản phẩm nào
              </div> */}
                {/* kết thúc giỏ hàng không có sản phẩm */}
                {/* -------------------------------- */}
                {/* nếu giở hàng có sản phẩm */}
                {arr.map((item, index) => (
                  <div key={index}>
                    <Link href={"/card"}>
                      <div
                        onClick={() => setShowShopping(false)}
                        className="relative w-full sm:h-[100px] h-[70px]  py-2 flex justify-between"
                      >
                        <div className="h-full sm:w-[80px] w-[50px] ">
                          <img
                            src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/08/Hinh-nen-anime-cute-5-1.jpg.webp"
                            alt="sp"
                          />
                        </div>
                        <div className="flex-1 flex flex-col overflow-y-auto px-4">
                          <span className="w-full break-words font-bold">
                            Ten san pham
                          </span>
                          <span className="w-full break-words">
                            Gia : 12 000 000
                          </span>
                        </div>
                        <button className="absolute bottom-2 right-0 text-[#ff4343] w-[60px] py-2 border-[1px] border-[#ff4343] hover:bg-[#ff4343] hover:text-[#ffffff]">
                          Xóa
                        </button>
                      </div>
                    </Link>
                  </div>
                ))}
                {/* kết thúc giỏ hàng có ản phẩm */}
              </div>
            </div>
          </div>
        )}
      </span>
      <span
        onMouseEnter={() => setShowUser(true)}
        onMouseLeave={() => setShowUser(false)}
        className=" relative flex items-center"
      >
        <i className="bx bx-user-plus text-[40px]"></i> {/* Sử dụng Boxicons */}
        <span className="ml-2 mt-3 text-4xl">Tài khoản</span>
        {/* <Avatar className="size-[30px]  ">
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="ml-2">Phạm Thế Phong</span> */}
        {/* div thảo tác */}
        {showUser && (
          <div className="absolute sm:bottom-[0px] top-[35px] right-1/2 translate-x-1/2 pt-5 text-3xl">
            <div className="rounded-sm w-[200px] sm:max-h-[400px] max-h-[200px] overflow-y-auto border-[1px] border-[#959595] bg-[#ffffff] text-[#000] ">
              <div className="relative w-full   flex justify-between">
                <ul className="w-full">
                  <li className="p-4 border-b-[1px] hover:bg-[#ccc]">
                    Đăng nhập
                  </li>
                  <li className="p-4 border-b-[1px] hover:bg-[#ccc]">
                    Đăng kí
                  </li>
                  <li className="p-4 border-b-[1px] hover:bg-[#ccc]">
                    Đăng xuất
                  </li>
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
