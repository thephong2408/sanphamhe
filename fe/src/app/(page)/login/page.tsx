"use client";
// src/pages/Login.tsx (hoặc src/components/Login.tsx)
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý đăng nhập ở đây (ví dụ: gọi API để xác thực người dùng)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center sm:mb-0 mb-10">
      <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-md border-[1px]">
        <h2 className="sm:text-4xl text-2xl font-bold mb-4 text-center ">
          Login
        </h2>
        <form className="space-y-10" onSubmit={handleSubmit}>
          <div className="mb-4  space-y-5">
            <label
              htmlFor="email"
              className="block text-sm sm:text-[18px] text-[17px]"
            >
              Email
            </label>
            <div className="border-[1px] rounded-md shadow-sm ">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className=" block w-full px-3 py-2 border-[5px] border-[#000] focus:outline-none focus:bg-slate-200 sm:text-[15px] text-[12px]"
              />
            </div>
          </div>
          <div className="mb-6 space-y-5">
            <label
              htmlFor="password"
              className="block text-sm sm:text-[18px] text-[17px]"
            >
              Password
            </label>
            <div className="border-[1px] rounded-md shadow-sm ">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-3 py-2 focus:outline-none focus:bg-slate-200 sm:text-[15px] text-[12px]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
