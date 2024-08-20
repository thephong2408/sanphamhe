import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const currentPath = usePathname();

  return (
    <div className="py-3 sm:h-[45px] sm:py-0 xl:mr-3 flex items-center mt-2 sm:text-[16px] text-[12px] font-light xl:px-[150px] lg:px-[40px] px-[5px] bg-[#fc5b31] dark:bg-[#242527] text-white">
      <ul className="flex flex-wrap h-full">
        <Link href={"/"}>
          <li
            className={`h-full flex justify-center items-center px-5  ${
              currentPath === "/"
                ? "bg-[#f3903a] dark:text-white " // Thay màu đỏ bằng màu cam
                : "hover:bg-[#f3903a] dark:hover:bg-[#ccc]"
            }`}
          >
            Trang chủ
          </li>
        </Link>

        <Link href={"/sale"}>
          <li
            className={`h-full flex justify-center items-center px-5  ${
              currentPath === "/sale"
                ? "bg-[#f3903a] dark:text-white " // Thay màu đỏ bằng màu cam
                : "hover:bg-[#f3903a] dark:hover:bg-[#ccc]"
            }`}
          >
            Khuyến mãi
          </li>
        </Link>

        <Link href={"/newarrivals"}>
          <li
            className={`h-full flex justify-center items-center px-5  ${
              currentPath === "/newarrivals"
                ? "bg-[#f3903a] dark:text-white " // Thay màu đỏ bằng màu cam
                : "hover:bg-[#f3903a] dark:hover:bg-[#ccc]"
            }`}
          >
            Sản phẩm mới nhất
          </li>
        </Link>

        <Link href={"/bestsellers"}>
          <li
            className={`h-full flex justify-center items-center px-5  ${
              currentPath === "/bestsellers"
                ? " bg-[#f3903a] dark:text-white " // Thay màu đỏ bằng màu cam
                : "hover:bg-[#f3903a] dark:hover:bg-[#ccc]"
            }`}
          >
            Sản phẩm hot
          </li>
        </Link>

        <Link href={"/history"}>
          <li
            className={`h-full flex justify-center items-center px-5  ${
              currentPath === "/history"
                ? "bg-[#f3903a] dark:text-white " // Thay màu đỏ bằng màu cam
                : "hover:bg-[#f3903a] dark:hover:bg-[#ccc]"
            }`}
          >
            Lịch sử giao dịch
          </li>
        </Link>
      </ul>
    </div>
  );
}
