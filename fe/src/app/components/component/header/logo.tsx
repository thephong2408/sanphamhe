import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <span className="sm:h-[65px] h-[60px] flex items-center">
        {/* Logo */}
        <div className="h-full py-3 ">
          <Link href={"/"}>
            <img
              src="https://i.pinimg.com/564x/ae/08/0c/ae080c00fe48df5eb9ed6155f853936c.jpg"
              alt="logo"
            />
          </Link>
        </div>
        {/* breadcrumb */}
        <Breadcrumb className="xl:block hidden ml-10 ">
          <BreadcrumbList className="text-white lg:text-[15px] text-[12px]">
            {/* <BreadcrumbItem>
                            <BreadcrumbLink
                                className=" flex items-center hover:bg-[#a8a8a8] p-4 rounded-sm"
                                href="/"
                            >
                                <FontAwesomeIcon
                                    className="size-[20px] mr-2 mb-3"
                                    icon={faHouse}
                                />
                                Trang chủ
                            </BreadcrumbLink>
                        </BreadcrumbItem> */}
          </BreadcrumbList>
        </Breadcrumb>
      </span>
    </div>
  );
};
