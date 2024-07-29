"use client";
import React from "react";
import Link from "next/link";

export default function Card() {
  return (
    <Link href={"/card"}>
      <div className="min-w-[130px] max-w-[300px] hover:shadow-md border-[1px] cursor-pointer">
        <div
          className="w-full sm:h-[250px] h-[200px] bg-slate-400 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://mega.com.vn/media/news/2905_hinh-nen-may-tinh-sieu-de-thuong.jpg')",
          }}
        >
          <img
            className="hover:opacity-0"
            alt="img"
            src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
          />
        </div>
        <div className="bg-white p-2">
          <span className="block text-ellipsis line-clamp-2 w-full mb-5">
            Laptop Gaming Asus TUF A15 FA507NU LP131W R5 7
          </span>
          <span className="text-red-600 w-full text-center sm:text-3xl text-xl ">
            14 000 000
          </span>
          <nav className="flex justify-between w-full mt-3">
            <ul>
              <li>thông số 1</li>
              <li>thông số 1</li>
            </ul>
            <ul>
              <li>thông số 1</li>
              <li>thông số 1</li>
            </ul>
          </nav>
        </div>
      </div>
    </Link>
  );
}
