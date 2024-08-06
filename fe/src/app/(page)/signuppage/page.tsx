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

  const [errors, setErrors] = useState<
    Partial<Record<keyof SignUpFormData, string>>
  >({});
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const re = /^[0-9]{10,}$/; // Ví dụ kiểm tra số điện thoại có ít nhất 10 ký tự số
    return re.test(phoneNumber);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccess(null);

    const newErrors: Partial<Record<keyof SignUpFormData, string>> = {};

    // Basic validation
    if (!formData.username.trim()) {
      newErrors.username = "Tên không được để trống!";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ!";
    }
    if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Số điện thoại không hợp lệ!";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu nhập lại không chính xác!";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }
    if (formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = "Số điện thoại phải có ít nhất 10 ký tự";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // / If no errors, send data to API
    const { confirmPassword, ...dataToSend } = formData;

    console.log("dữ liệu chuyền đi", dataToSend);

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
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="username"
              className="flex items-center border-[1px] rounded-md shadow-sm bg-white"
            >
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
            </label>
            {errors.username && (
              <p className="text-red-500 mt-1">{errors.username}</p>
            )}
          </div>

          <div className="mb-4 flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="flex items-center border-[1px] rounded-md shadow-sm bg-white"
            >
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
            </label>
            {errors.phoneNumber && (
              <p className="text-red-500 mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="mb-4 flex flex-col">
            <label
              htmlFor="email"
              className="flex items-center border-[1px] rounded-md shadow-sm bg-white"
            >
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
            </label>
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4 flex flex-col">
            <label
              htmlFor="password"
              className="flex items-center border-[1px] rounded-md shadow-sm bg-white"
            >
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
            </label>
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-4 flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="flex items-center border-[1px] rounded-md shadow-sm bg-white"
            >
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
            </label>
            {errors.confirmPassword && (
              <p className="text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

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
