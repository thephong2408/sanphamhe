"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Admin() {
  const currentPath = usePathname();

  const links = [
    { href: "/admin/accounts", label: "Quản lí tài khoản" },
    { href: "/admin/products", label: "Quản lí sản phẩm" },
    { href: "/admin/orders", label: "Xác nhận đơn hàng" },
  ];

  return (
    <div className="py-3 sm:h-[45px] sm:py-0 xl:mr-3 flex items-center mt-2 sm:text-[16px] text-[12px] font-light xl:px-[150px] lg:px-[40px] px-[5px] bg-[#fc5b31] dark:bg-[#242527] text-white">
      <ul className="flex flex-wrap h-full">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <li
              className={`h-full flex justify-center items-center px-5 ${
                currentPath === link.href
                  ? "bg-[#f3903a] dark:text-white"
                  : "hover:bg-[#f3903a] dark:hover:bg-[#ccc]"
              }`}
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
