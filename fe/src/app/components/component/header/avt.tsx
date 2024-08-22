"use client";

import "boxicons/css/boxicons.min.css";

import { ImFrustrated } from "react-icons/im";

import { useState, useEffect } from "react";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSignOutAlt,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { clearListUser } from "@/app/redux/slices/dataDispart";

import Link from "next/link";
import { useDispatch } from "react-redux";

import { setDataCard } from "@/app/redux/slices/dataCard";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { clearDataId, clearDataUsername } from "@/app/redux/slices/dataDispart";
import { clearCart } from "@/app/redux/slices/dataCart";
import Cart from "./cart";
import { decryptData } from "@/components/ui/cryptoUtils";

function Avt() {
  // dữ liệu nhận được khi đã đăng nhập
  const usernames = useSelector((state: any) => state.dataDispart.dataUsername);

  const decryptedUsername = usernames ? decryptData(usernames) : "";

  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  const router = useRouter();

  // Kiểm tra nếu máy tính chạy trên server-side
  useEffect(() => {
    setUsername(decryptedUsername);
  }, [decryptedUsername]);

  useEffect(() => {
    // Kiểm tra nếu username là chuỗi và không rỗng
    if (typeof username === "string" && username.trim().length > 0) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }

    // Bắt đầu loading
    setLoading(true);

    // Dừng loading sau 1 giây
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Dọn dẹp timer khi component unmount
    return () => clearTimeout(timer);
  }, [username]);

  // Xử lý đăng xuất
  const handleLogout = () => {
    setUsername("");
    setShowLogin(false);
    dispatch(setDataCard([]));
    dispatch(clearDataId());
    dispatch(clearDataUsername());
    dispatch(clearCart());
    localStorage.removeItem("phone");
    dispatch(clearListUser());
    router.push("/login");
  };

  // chuyền dữ liệu
  const dispatch = useDispatch();
  const dataCart = useSelector((state: any) => state.dataCart.dataCart);
  const [data, setData] = useState<any>(dataCart);
  useEffect(() => {
    setData(dataCart);
  }, [dataCart]);

  const [showUser, setShowUser] = useState<boolean>(false);

  return (
    <div className="items-center xl:flex hidden z-50 h-full">
      {showLogin && decryptedUsername !== "admin" && <Cart />}

      {/* khi không có user */}
      {!showLogin && dataCart.length == 0 && (
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
          <>
            {username !== "admin" ? (
              <Avatar className="size-[35px] rounded-full flex justify-center items-center overflow-hidden">
                {!loading ? (
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                ) : (
                  <ImFrustrated className="size-[30px]" />
                )}
              </Avatar>
            ) : (
              <div className="size-[35px] rounded-full flex justify-center items-center overflow-hidden">
                {loading ? (
                  <ImFrustrated className="size-[30px]" />
                ) : (
                  <img
                    src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/05/anh-hacker-ngau-2.jpg.webp"
                    alt=""
                  />
                )}
              </div>
            )}
          </>
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
                <span className="text-xl font-semibold mt-3">{username}</span>
              </div>

              <div className="flex flex-col mt-5 text-[18px]">
                {username !== "admin" ? (
                  <Link href={"/myorder"}>
                    <button
                      className="mb-2 text-[15px] p-3 border-[1px] rounded-2xl dark:border-white"
                      onClick={() => setShowUser(false)}
                    >
                      <FontAwesomeIcon className="mr-2" icon={faCartShopping} />
                      Đơn hàng của tôi
                    </button>
                  </Link>
                ) : (
                  <Link href={"/admin"}>
                    <button
                      className="mb-2 text-[15px] p-3 border-[1px] rounded-2xl dark:border-white"
                      onClick={() => setShowUser(false)}
                    >
                      <FontAwesomeIcon className="mr-2" icon={faCartShopping} />
                      Quản lí
                    </button>
                  </Link>
                )}

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
    </div>
  );
}

export default Avt;
