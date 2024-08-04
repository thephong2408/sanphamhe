"use client";
import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaLock, FaKey } from "react-icons/fa";

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu nhập lại không chính xác!");
      return;
    } else if (formData.password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    } else if (formData.phoneNumber.length < 10) {
      setError("Số điện thoại phải có ít nhất 10 ký tự");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSuccess("Đăng ký thành công!");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="sm:max-w-[600px] sm:w-[600px] w-[350px] mx-auto p-8 border border-gray-300 bg-[#f4f7fe] rounded-lg shadow-md mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold mb-6">Đăng ký</h1>

        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border-[1px] rounded-md shadow-sm bg-white">
            <FaUser className="text-gray-500 ml-3" />
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="block w-full sm:p-5 p-3 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
            />
          </div>

          <div className="mb-4 flex items-center border-[1px] rounded-md shadow-sm bg-white">
            <FaPhone className="text-gray-500 ml-3" />
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="block w-full sm:p-5 p-3 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
            />
          </div>

          <div className="mb-4 flex items-center border-[1px] rounded-md shadow-sm bg-white">
            <FaEnvelope className="text-gray-500 ml-3" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="block w-full sm:p-5 p-3 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
            />
          </div>

          <div className="mb-4 flex items-center border-[1px] rounded-md shadow-sm bg-white">
            <FaLock className="text-gray-500 ml-3" />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="block w-full sm:p-5 p-3 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
            />
          </div>

          <div className="mb-4 flex items-center border-[1px] rounded-md shadow-sm bg-white">
            <FaKey className="text-gray-500 ml-3" />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="block w-full sm:p-5 p-3 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-[120px] py-5 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
          >
            Đăng Kí
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
