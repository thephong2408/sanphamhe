"use client";
import React, { useState } from "react";

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    }

    // Simulate API call
    setTimeout(() => {
      setSuccess("Registration successful!");
    }, 1000);
  };

  return (
    <div className="sm:max-w-[600px] sm:w-[600px] max-w-xl mx-auto  p-8 border border-gray-300 rounded-lg shadow-md mb-10">
      <h1 className="sm:text-4xl text-3xl font-bold mb-6">Sign Up</h1>

      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block sm:text-[18px] text-[15px]  font-medium text-gray-700"
          >
            Username:
          </label>
          <div className="border-[1px] rounded-md shadow-sm">
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className=" block w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:sm:text-[18px] text-[15px] "
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block sm:text-[18px] text-[15px]  font-medium text-gray-700"
          >
            Email:
          </label>
          <div className="border-[1px] rounded-md shadow-sm">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:sm:text-[18px] text-[15px] "
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block sm:text-[18px] text-[15px]  font-medium text-gray-700"
          >
            Password:
          </label>
          <div className="border-[1px] rounded-md shadow-sm">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:sm:text-[18px] text-[15px] "
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block sm:text-[18px] text-[15px]  font-medium text-gray-700"
          >
            Confirm Password:
          </label>
          <div className="border-[1px] rounded-md shadow-sm">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2  sm:sm:text-[18px] text-[15px] "
            />
          </div>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
