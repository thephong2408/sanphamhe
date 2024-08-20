"use client";
import React from "react";

interface Order {
  id: number;
  paymentId: string;
  status: string;
}

const orders: Order[] = [
  { id: 1, paymentId: "PAY12345", status: "Chờ Xác Nhận" },
  { id: 2, paymentId: "PAY67890", status: "Chờ Xác Nhận" },
  { id: 3, paymentId: "PAY11223", status: "Chờ Xác Nhận" },
];

export default function OrderDet() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Xác Nhận Đơn Hàng</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Đơn Thanh Toán</th>
              <th className="px-4 py-2 border-b">Yêu Cầu Xác Nhận</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-2 border-b text-center">{order.id}</td>
                <td className="px-4 py-2 border-b text-center">
                  {order.paymentId}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
