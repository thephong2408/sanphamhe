import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="text-black sm:h-[50px] xl:mr-3 h-[30px] hidden sm:flex items-center mt-2 sm:text-[20px] text-[15px] font-normal ">
      <ul className="flex space-x-10 items-center ">
        <Link href={"/"}>
          <li className="ml-10 md:block hidden">Trang chủ</li>
        </Link>

        <Link href={"/sale"}>
          <li className="xl:block hidden">Khuyến mãi</li>
        </Link>

        <Link href={"/history"}>
          <li className="xl:block hidden">Lịch sử</li>
        </Link>
      </ul>
    </div>
  );
}
