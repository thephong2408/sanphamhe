import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div className=" sm:h-[50px] xl:mr-3 h-[30px]  flex items-center mt-2 sm:text-[16px] text-[12px] font-light xl:px-[150px] lg:px-[40px] px-[5px] bg-[#f28121] dark:bg-[#242527] text-white">
      <ul className="flex  h-full  ">
        <Link href={"/"}>
          <li className="h-full flex justify-center items-center hover:bg-[#f3903a] dark:hover:bg-[#ccc] px-5 ">
            Trang chủ
          </li>
        </Link>

        <Link href={"/sale"}>
          <li className="h-full flex justify-center items-center hover:bg-[#f3903a] dark:hover:bg-[#ccc] px-5">
            Khuyến mãi
          </li>
        </Link>

        <Link href={"/history"}>
          <li className="h-full flex justify-center items-center hover:bg-[#f3903a] dark:hover:bg-[#ccc] px-5">
            Lịch sử
          </li>
        </Link>
      </ul>
    </div>
  );
}
