"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LayoutCard from "@/app/Layouts/LayoutCard"; // Ensure this import is correct
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  setDataUsername,
  setDataId,
  setListUser,
} from "@/app/redux/slices/dataDispart";
import { encryptData } from "@/components/ui/cryptoUtils";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); // Clear previous errors

    const dataToSend = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        dataToSend
      );

      if (response.data && response.data.id && response.data.username) {
        const userData = response.data;
        const encryptedId = encryptData(userData.id.toString());
        const encryptedUsername = encryptData(userData.username);

        dispatch(setDataId(encryptedId));
        dispatch(setDataUsername(encryptedUsername));

        console.log("id:", encryptedId);
        console.log("name:", encryptedUsername);
        console.log("userData_is_admin:", userData.is_admin);

        if (userData.username === "admin") {
          try {
            // Gọi API để lấy dữ liệu user và laptops
            const adminResponse = await axios.post(
              "http://127.0.0.1:8000/api/admin",
              {
                id: userData.id, // Chuyển ID của admin vào đây
              }
            );
            console.log("Admin Response:", adminResponse.data);

            // Kiểm tra và xử lý dữ liệu admin nếu cần
            if (adminResponse.data) {
              const { users, laptops } = adminResponse.data;
              dispatch(setListUser(users));

              // Lưu dữ liệu vào Redux hoặc xử lý theo nhu cầu của bạn
              console.log("Users Data:", users);
              console.log("Laptops Data:", laptops);

              // Điều hướng đến trang admin
              router.push("/admin/accounts");
            } else {
              setError("Không tìm thấy dữ liệu admin.");
            }
          } catch (adminError: any) {
            console.error(
              "Error fetching admin data:",
              adminError.response?.data || adminError.message
            );
            setError("Có lỗi xảy ra khi lấy dữ liệu admin.");
          }
        } else {
          router.push("/");
        }
      } else {
        const errorMessage =
          response.data.msg || "Dữ liệu phản hồi không hợp lệ.";
        setError(errorMessage);
        console.error("Invalid response data:", response.data);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.msg ||
        "Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại.";
      setError(errorMessage);
      console.error(
        "Error during login:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <LayoutCard>
      <div className="flex items-center justify-center sm:h-[500px] sm:mt-0 mt-5">
        <div className="sm:w-[400px] w-[380px] p-8 rounded-lg shadow-md border-[1px] mb-5">
          <h2 className="sm:text-4xl text-2xl font-medium text-[#5067ff] mb-4">
            Đăng nhập
          </h2>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="mb-4 space-y-1">
              <div className="border-[1px] rounded-md shadow-sm  flex items-center">
                <FaEnvelope className=" ml-3 size-[20px] text-[#ccc]" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Gmail của bạn"
                  className="block w-full sm:p-5 p-3 ml-4 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </div>
            </div>
            <div className="mb-6 space-y-1">
              <div className="border-[1px] rounded-md shadow-sm  flex items-center">
                <FaLock className=" ml-3 size-[20px] text-[#ccc]" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mật khẩu"
                  className="w-full sm:p-5 p-3 ml-4 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-[100px] bg-[#5067ff] text-white py-4 px-4 rounded-md shadow-sm"
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
