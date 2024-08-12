import React from "react";
import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";
import DarkModeToggle from "../../darkShape/button";

export const Logo = () => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <span className="sm:h-[65px] h-[50px] flex items-center">
        {/* Logo */}
        <div className=" h-[50px] dark:bg-white">
          <img
            src="https://storage-asset.msi.com/frontend/imgs/logo.png"
            alt="logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }} // Add cursor pointer to indicate clickability
          />
        </div>
        {/* Dark Mode Toggle */}
        <DarkModeToggle />
        {/* Breadcrumb */}
        <Breadcrumb className="xl:block hidden sm:ml-10">
          <BreadcrumbList className="text-white lg:text-[15px] text-[12px]"></BreadcrumbList>
        </Breadcrumb>
      </span>
    </div>
  );
};
