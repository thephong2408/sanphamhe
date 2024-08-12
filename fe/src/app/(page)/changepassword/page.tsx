"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUnlockAlt } from "react-icons/fa";
import LayoutCard from "@/app/Layouts/LayoutCard";

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý đổi mật khẩu ở đây (ví dụ: gọi API để thực hiện thay đổi mật khẩu)
    // console.log("Email:", email);
    // console.log("New Password:", newPassword);
    // console.log("Confirm Password:", confirmPassword);

    if (newPassword !== confirmPassword) {
      alert("Mật khẩu mới và xác nhận mật khẩu không khớp!");
      return;
    }

    // Thực hiện các bước tiếp theo, ví dụ gọi API để thay đổi mật khẩu
  };

  return (
    <LayoutCard>
      <div className="flex items-center justify-center sm:h-[500px] sm:mt-0 mt-5">
        <div className="sm:w-[400px] w-[380px] p-8  rounded-lg shadow-md border-[1px] mb-5">
          <h2 className="sm:text-4xl text-2xl font-bold mb-4">Đổi mật khẩu</h2>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="mb-4 space-y-1">
              <div className="border-[1px] rounded-md shadow-sm  flex items-center">
                <FaEnvelope className=" ml-3 size-[20px]" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Gmail của bạn"
                  className="block w-full sm:p-5 p-3 ml-3 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </div>
            </div>
            <div className="mb-6 space-y-1">
              <div className="border-[1px] rounded-md shadow-sm  flex items-center">
                <FaLock className=" ml-3 size-[20px]" />
                <input
                  type="password"
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Mật khẩu mới"
                  className="w-full sm:p-5 p-3 ml-3 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </div>
            </div>
            <div className="mb-6 space-y-1">
              <div className="border-[1px] rounded-md shadow-sm  flex items-center">
                <FaUnlockAlt className=" ml-3 size-[20px]" />
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Xác nhận mật khẩu"
                  className="w-full sm:p-5 p-3 ml-3 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-[150px] bg-blue-500  py-4 px-4 font-medium rounded-md shadow-sm"
              >
                Đổi mật khẩu
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutCard>
  );
};

export default PasswordReset;
