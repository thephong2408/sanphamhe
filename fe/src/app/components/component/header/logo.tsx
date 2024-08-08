import React from "react";
import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";

export const Logo = () => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <span className="sm:h-[65px] h-[60px] flex items-center">
        {/* Logo */}
        <div className="h-full">
          <img
            src="https://storage-asset.msi.com/frontend/imgs/logo.png"
            alt="logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }} // Add cursor pointer to indicate clickability
          />
        </div>
        {/* Breadcrumb */}
        <Breadcrumb className="xl:block hidden ml-10">
          <BreadcrumbList className="text-white lg:text-[15px] text-[12px]"></BreadcrumbList>
        </Breadcrumb>
      </span>
    </div>
  );
};
