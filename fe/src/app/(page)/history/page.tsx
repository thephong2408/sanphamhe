"use client";
import React from "react";
import LayoutCard from "@/app/Layouts/LayoutCard";
import { useSelector } from "react-redux";

export default function History() {
  const dataBill = useSelector((state: any) => state.dataBill.dataBill);

  console.log(dataBill, "dataBill");

  return (
    <div className="flex items-center justify-center mb-10">
      <LayoutCard>
        {dataBill.length === 0 ? (
          <div className="flex-1 flex sm:h-auto h-[400px] items-center md:text-4xl text-2xl sm:mt-[100px] justify-center">
            <h1>Bạn chưa thực hiện bất kì giao dịch nào</h1>
          </div>
        ) : (
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4">
            {dataBill.map((item: any, index: number) => (
              <div
                key={index}
                className="mx-auto p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700"
              >
                <h1 className="text-3xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
                  Hóa đơn {index + 1}
                </h1>
                <table className="w-full text-gray-200">
                  <thead>
                    <tr className="bg-gray-800 text-gray-100">
                      <th className="py-3 px-4 text-left font-medium">
                        Tên sản phẩm
                      </th>
                      <th className="py-3 px-4 text-center font-medium">
                        Số lượng
                      </th>
                      <th className="py-3 px-4 text-left font-medium">Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Lặp qua các sản phẩm trong hóa đơn */}
                    {item.productDetails.map((product: any, idx: number) => (
                      <tr
                        key={idx}
                        className="border-b border-gray-700 hover:bg-gray-700"
                      >
                        <td className="py-4 px-4">{product.name}</td>
                        <td className="py-4 text-center px-4">
                          {product.quantity}
                        </td>
                        <td className="py-4 px-4 text-yellow-400">
                          {product.price.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td className="py-4 px-4 font-medium">Thời gian</td>
                      <td className="py-4 px-4" colSpan={2}>
                        {new Date(item.currentTime).toLocaleString("vi-VN")}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Tổng tiền</td>
                      <td className="py-4 px-4" colSpan={2}>
                        <span className="text-yellow-400">
                          {item.totalPrice}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </LayoutCard>
    </div>
  );
}
