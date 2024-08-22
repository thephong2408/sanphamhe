"use client";
import React, { useState } from "react";

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
  const [searchId, setSearchId] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchId(event.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.id.toString().includes(searchId)
  );

  return (
    <div className="container mx-auto p-4">
      <span className="text-3xl font-normal">Xác nhận đơn hàng</span>

      {/* Input tìm kiếm */}
      <div className="my-4 p-5 border-[1px] rounded-md">
        <input
          type="text"
          value={searchId}
          onChange={handleSearchChange}
          placeholder="Tìm kiếm theo ID"
          className="w-full px-4 py-2 border  focus:outline-none"
        />
      </div>

      <div className="overflow-x-auto mt-10 max-h-[500px] overflow-y-auto">
        <table className="min-w-full ">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID khách hàng</th>
              <th className="px-4 py-2 border-b">ID thanh toán</th>
              <th className="px-4 py-2 border-b">Yêu Cầu Xác Nhận</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-2 border-b text-center">{order.id}</td>
                  <td className="px-4 py-2 border-b text-center">
                    {order.paymentId}
                  </td>
                  <td className="px-4 py-2 border-b text-center text-[#202bff]">
                    {order.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-2 border-b text-center text-red-500"
                >
                  Không tìm thấy đơn hàng nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
