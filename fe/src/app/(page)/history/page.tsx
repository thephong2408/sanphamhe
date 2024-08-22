"use client";
import React from "react";
import LayoutCard from "@/app/Layouts/LayoutCard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Link from "next/link";
import { decryptData } from "@/components/ui/cryptoUtils";
import axios from "axios";

export default function History() {
  const dataBill = useSelector((state: any) => state.dataBill.dataBill);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const userId = useSelector((state: any) => state.dataDispart.dataId);
  const decryptedUserId = userId ? decryptData(userId) : "";
  console.log("decryptedUserId:", decryptedUserId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/history", {
          IdUseName: decryptedUserId, // Thay "4" bằng giá trị thực tế
        });

        setData(response.data);
        console.log(response.data.history, "response.data");
      } catch (err) {
        setError("Đã xảy ra lỗi khi lấy dữ liệu.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading)
    return (
      <div className="w-full flex-1 flex items-center justify-center">
        Đang tải dữ liệu...
      </div>
    );
  if (error) return <p>{error}</p>;

  // console.log(dataBill, "dataBill");

  return (
    <div className="flex items-center justify-center mb-10  rounded-xl ">
      <LayoutCard>
        {dataBill.length === 0 ? (
          <div className="flex-1 py-36 text-center  flex flex-col justify-center items-center  rounded-lg fade-out space-y-5">
            <div className="size-[150px] border-none bg-transparent">
              {" "}
              <img
                src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg"
                alt=""
              />
            </div>
            <span className="text-2xl ">Bạn chưa thực hiện giao dịch nào </span>
            <Link href={"/"}>
              <button className="bg-[#b80000] text-white rounded-lg w-[200px] py-3">
                Mua sắm ngay
              </button>
            </Link>
          </div>
        ) : (
          <div className="p-4">
            {dataBill
              .slice()
              .reverse()
              .map((item: any, index: number) => (
                <div
                  key={index}
                  className="mx-auto p-6 bg-[#191919] shadow-lg rounded-lg border border-gray-700 mb-10"
                >
                  <h1 className="text-3xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
                    Hóa đơn {index + 1}
                  </h1>
                  <div className="mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <h2 className="text-3xl font-semibold text-gray-100 mb-4">
                      Thông tin người nhận
                    </h2>
                    <p className="text-gray-200 mb-2">
                      Tên: {item.formData.name}
                    </p>
                    <p className="text-gray-200 mb-2">
                      Số điện thoại: {item.formData.phone}
                    </p>
                    <p className="text-gray-200 mb-2">
                      Email: {item.formData.email}
                    </p>
                    <p className="text-gray-200">
                      Địa chỉ: {item.formData.houseNumber}, {item.formData.ward}
                      , {item.formData.district}, {item.formData.city}
                    </p>
                  </div>
                  <table className="w-full text-gray-200 mt-4">
                    <thead>
                      <tr className="bg-gray-800 text-gray-100">
                        <th className="py-3 px-4 text-left font-medium">
                          Tên sản phẩm
                        </th>
                        <th className="py-3 px-4 text-center font-medium">
                          Số lượng
                        </th>
                        <th className="py-3 px-4 text-center font-medium">
                          Giá
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.productDetails.map((product: any, idx: number) => (
                        <tr
                          key={idx}
                          className="border-b border-gray-700 hover:bg-gray-700"
                        >
                          <td className="py-4 px-4">{product.name}</td>
                          <td className="py-4 text-center px-4">
                            {product.quantity}
                          </td>
                          <td className="py-4 px-4 text-center text-yellow-400">
                            {product.price.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="py-4 px-4 font-medium">Thời gian</td>
                        <td className="py-4 px-4 text-center" colSpan={2}>
                          {item.currentTime}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-medium">Tổng tiền</td>
                        <td className="py-4 px-4 text-center" colSpan={2}>
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
