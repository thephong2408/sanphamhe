"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames";

import Search from "./search";
import Avt from "./avt";
import Menu from "./menu";
import { Logo } from "./logo";
import Nav from "./nav";
import Time from "./time";
import Admin from "./admin";
import { useSelector } from "react-redux";
import { decryptData } from "@/components/ui/cryptoUtils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const dataUserName = useSelector(
    (state: any) => state.dataDispart.dataUsername
  );
  console.log("dataUserName kjbejf", dataUserName);
  const decryptedUsername = dataUserName ? decryptData(dataUserName) : "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={classNames(
        "transition-all duration-300 ease-in-out shadow-md bg-white dark:bg-[#18191b]",
        {
          " w-screen  fixed top-0 z-50": isScrolled,
        },
        ""
      )}
    >
      {/* <Time /> */}
      <div className="sm:h-[70px] h-[60px] mr-2 flex justify-between items-center xl:px-[150px] lg:px-[40px] px-[5px] sm:text-[15px] text-[12px]">
        <div className="flex items-center">
          <Logo />
        </div>
        {decryptedUsername === "admin" ? "" : <Search />}

        <div className="flex items-center">
          <Avt />
          <Menu />
        </div>
      </div>
      {decryptedUsername === "admin" ? <Admin /> : <Nav />}
    </div>
  );
};

export default Header;
