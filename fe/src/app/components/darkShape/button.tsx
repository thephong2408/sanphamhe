"use client";
import { useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa";

const DarkModeToggle = () => {
  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("dark-mode", isDarkMode ? "true" : "false");
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "true") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 text-gray-700 dark:text-white ml-5 sm:text-[25px] text-[20px] border-2 border-gray-300 rounded-full"
    >
      <FaRegLightbulb />
    </button>
  );
};

export default DarkModeToggle;
