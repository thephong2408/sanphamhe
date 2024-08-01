import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
export default function Nav() {
  return (
    <div className="text-black sm:h-[50px] h-[30px]  flex items-center mt-2 sm:text-[20px] text-[15px] font-medium xl:mx-[150px] lg:mx-[40px] mx-[5px]">
      <ul className="flex space-x-5 items-center pl-5">
        <Link href={"/"}>
          <li>Trang chủ</li>
        </Link>
        <FaChevronRight />
        <Link href={"/laptop"}>Khuyến mại</Link>
        <FaChevronRight />
        <Link href={"/laptop"}>Khách hàng</Link>
      </ul>
    </div>
  );
}
