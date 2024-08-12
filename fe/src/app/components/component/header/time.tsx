"use client";

import React, { useState, useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa";

const Time: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(now.toLocaleTimeString([], options));
    };

    updateTime();
    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className=" sm:py-5 py-3 xl:px-[150px] lg:px-[40px] px-[5px] ">
      <ul className="flex justify-between w-full">
        <li>{` ${currentTime}`}</li>
        <li className="sm:block hidden">
          Chào mừng đến shop tại: số 16 - 543 NGUYỄN TRÃI
        </li>
        <li className="flex">
          Liên hệ: 0863839474 <FaFacebookSquare className="text-[20px] ml-3" />
        </li>
      </ul>
    </div>
  );
};

export default Time;
