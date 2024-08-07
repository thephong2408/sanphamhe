"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LayoutCard from "@/app/Layouts/LayoutCard";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // chuyền tài khoản mật khẩu cho be
    const dataToSend = {
      email: email,
      password: password,
    };

    console.log(dataToSend);
  };

  return (
    <LayoutCard>
      <div className="flex items-center justify-center sm:h-[500px] sm:mt-0 mt-5">
        <div className="sm:w-[400px] w-[380px] p-8 bg-[#f4f7fe] rounded-lg shadow-md border-[1px] mb-5">
          <h2 className="sm:text-4xl text-2xl font-bold mb-4">Đăng nhập</h2>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="mb-4 space-y-1">
              <div className="border-[1px] rounded-md shadow-sm bg-white flex items-center">
                <FaEnvelope className="text-gray-500 ml-3 size-[20px]" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Gmail của bạn"
                  className="block w-full sm:p-5 p-3 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </div>
            </div>
            <div className="mb-6 space-y-1">
              <div className="border-[1px] rounded-md shadow-sm bg-white flex items-center">
                <FaLock className="text-gray-500 ml-3 size-[20px]" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mật khẩu"
                  className="w-full sm:p-5 p-3 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-[100px] bg-blue-500 text-white py-4 px-4 rounded-md shadow-sm"
              >
                Đăng nhập
              </button>
              <span className="text-blue-500 font-medium cursor-pointer">
                Quên mật khẩu?
              </span>
            </div>
          </form>
        </div>
      </div>
    </LayoutCard>
  );
};

export default Login;
