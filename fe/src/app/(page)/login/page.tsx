"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LayoutCard from "@/app/Layouts/LayoutCard"; // Ensure this import is correct
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setDataUsername, setDataId } from "@/app/redux/slices/dataDispart";

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
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        dataToSend
      );
      const userData = response.data;
      dispatch(setDataId(userData.id));
      dispatch(setDataUsername(userData.username));

      // Redirect to home page

      console.log("id:", userData.id);
      console.log("name:", userData.username);
      router.push("/");
    } catch (error) {
      setError("Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại.");
      console.error("Error during login:", error);
    }
  };

  return (
    <LayoutCard>
      <div className="flex items-center justify-center sm:h-[500px] sm:mt-0 mt-5">
        <div className="sm:w-[400px] w-[380px] p-8 rounded-lg shadow-md border-[1px] mb-5">
          <h2 className="sm:text-4xl text-2xl font-bold mb-4">Đăng nhập</h2>
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
                  className="block w-full sm:p-5 p-3 ml-4 border-none focus:outline-none focus:bg-slate-200 sm:text-[18px] text-[12px]"
                />
              </div>
            </div>
            <div className="mb-6 space-y-1">
              <div className="border-[1px] rounded-md shadow-sm  flex items-center">
                <FaLock className=" ml-3 size-[20px]" />
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
