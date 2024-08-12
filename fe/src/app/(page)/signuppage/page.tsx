"use client";
import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaLock, FaKey } from "react-icons/fa";
import LayoutCard from "@/app/Layouts/LayoutCard";
import { useRouter } from "next/navigation";
import axios from "axios";

interface SignUpFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

  const validatePhone = (phone: string): boolean => {
    const re = /^[0-9]{10,}$/; // Ví dụ kiểm tra số điện thoại có ít nhất 10 ký tự số
    return re.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccess(null);

    const newErrors: Partial<Record<keyof SignUpFormData, string>> = {};

    // Basic validation
    if (!formData.name.trim()) {
      newErrors.name = "Tên không được để trống!";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ!";
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ!";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu nhập lại không chính xác!";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }
    if (formData.phone.length < 10) {
      newErrors.phone = "Số điện thoại phải có ít nhất 10 ký tự";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // If no errors, send data to API
    const { confirmPassword, ...dataToSend } = formData;
    console.log("Data to send:", dataToSend);
    try {
      // Simulate API call
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        dataToSend
      );
      router.push("/login");
      console.log("Response from API:", response.data);
      setSuccess("Đăng ký thành công!");

      // Redirect to login page
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <LayoutCard>
      <div className="flex items-center justify-center sm:mt-0 mt-5">
        <div className="sm:max-w-[600px] sm:w-[600px] w-[350px] mx-auto p-8 border border-gray-300  rounded-lg shadow-md mb-10">
          <h1 className="sm:text-4xl text-3xl font-bold mb-6">Đăng ký</h1>

          {success && <p className="text-green-500 mb-4">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="name"
                className="flex items-center border-[1px] rounded-md shadow-sm "
              >
                <FaUser className=" ml-3" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="block w-full sm:p-5 p-3 ml-4 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </label>
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-4 flex flex-col">
              <label
                htmlFor="phone"
                className="flex items-center border-[1px] rounded-md shadow-sm "
              >
                <FaPhone className=" ml-3" />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="block w-full sm:p-5 p-3 ml-4 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </label>
              {errors.phone && (
                <p className="text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="mb-4 flex flex-col">
              <label
                htmlFor="email"
                className="flex items-center border-[1px] rounded-md shadow-sm "
              >
                <FaEnvelope className=" ml-3" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="block w-full sm:p-5 p-3 ml-4 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </label>
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4 flex flex-col">
              <label
                htmlFor="password"
                className="flex items-center border-[1px] rounded-md shadow-sm "
              >
                <FaLock className=" ml-3" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="block w-full sm:p-5 p-3 ml-4 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </label>
              {errors.password && (
                <p className="text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            <div className="mb-4 flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="flex items-center border-[1px] rounded-md shadow-sm "
              >
                <FaKey className=" ml-3" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="block w-full sm:p-5 p-3 ml-4 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
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
    </LayoutCard>
  );
};

export default SignUp;
