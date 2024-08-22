"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import UserName from "./userName";
import ProductTable from "./productTable";
import ProductForm from "./addsp";
import OrderDet from "./orderDet";
import { useSelector } from "react-redux";
import { decryptData } from "@/components/ui/cryptoUtils";

export default function Admin() {
  const [showWarning, setShowWarning] = useState(true);
  const router = useRouter();
  const currentPath = usePathname();
  const lastSegment = currentPath.split("/").pop();
  const userName = useSelector((state: any) => state.dataDispart.dataUsername);
  const decryptedUsername = userName ? decryptData(userName) : "";

  useEffect(() => {
    if (decryptedUsername !== "admin") {
      // Redirect after 3 seconds
      const timer = setTimeout(() => {
        router.push("/");
      }, 3000);

      // Clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [decryptedUsername, router]);

  return (
    <div className="sm:text-[18px] text-[12px] p-4">
      {decryptedUsername === "admin" ? (
        <>
          {lastSegment === "accounts" && <UserName />}
          {lastSegment === "products" && <ProductTable />}
          {lastSegment === "add-product" && <ProductForm />}
          {lastSegment === "orders" && <OrderDet />}
          {/* Add more conditions if needed */}
        </>
      ) : (
        showWarning && (
          <div className="text-center flex flex-1 justify-center items-center">
            <p>bạn đang có hành vi không chuẩn mực</p>
          </div>
        )
      )}
    </div>
  );
}
