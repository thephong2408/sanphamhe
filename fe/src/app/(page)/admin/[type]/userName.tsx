"use client";

import React, { useState } from "react";

interface Account {
  id: number;
  email: string;
}

const mockAccounts: Account[] = [
  { id: 1, email: "user1@gmail.com" },
  { id: 2, email: "user2@gmail.com" },
  { id: 3, email: "user3@gmail.com" },
];

export default function UserName() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleViewDetails = (id: number) => {
    console.log("Xem chi tiết tài khoản:", id);
  };

  const handleDeleteAccount = (id: number) => {
    console.log("Xóa tài khoản:", id);
  };

  const filteredAccounts = mockAccounts.filter((account) =>
    account.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="sm:text-[18px] text-[12px] p-4">
      <h1 className="text-3xl font-normal mb-4">Quản lý tài khoản</h1>

      <div className="p-5 border-[1px] mb-10">
        <input
          type="text"
          placeholder="Tìm kiếm theo email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full  border border-gray-300 rounded"
        />
      </div>

      <table className="min-w-full border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-3 px-4 border-b text-center">ID Tài khoản</th>
            <th className="py-3 px-4 border-b text-center">Email (Gmail)</th>
            <th className="py-3 px-4 border-b text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredAccounts.length > 0 ? (
            filteredAccounts.map((account, index) => (
              <tr
                key={account.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="py-3 px-4 border-b text-center">{account.id}</td>
                <td className="py-3 px-4 border-b text-center">
                  {account.email}
                </td>
                <td className="py-3 px-4 border-b flex flex-col justify-center items-center space-y-2">
                  <button
                    onClick={() => handleViewDetails(account.id)}
                    className="text-blue-500 px-3 py-1 rounded hover:bg-blue-50 transition duration-300"
                  >
                    Xem lịch sử thanh toán
                  </button>
                  <button
                    onClick={() => handleDeleteAccount(account.id)}
                    className="text-red-500 px-3 py-1 rounded hover:bg-red-50 transition duration-300"
                  >
                    Xóa tài khoản
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={3}
                className="py-3 px-4 border-b text-center text-red-500"
              >
                Không tìm thấy tài khoản nào
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
