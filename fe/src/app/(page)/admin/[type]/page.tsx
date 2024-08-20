"use client";

import React from "react";
import { usePathname } from "next/navigation";
import UserName from "./userName";
import ProductTable from "./productTable";
import ProductForm from "./addsp";
import OrderDet from "./orderDet";

export default function Admin() {
  const currentPath = usePathname();
  const lastSegment = currentPath.split("/").pop();

  return (
    <div className="sm:text-[18px] text-[12px] p-4">
      {lastSegment === "accounts" && <UserName />}
      {lastSegment === "products" && <ProductTable />}
      {lastSegment === "add-product" && <ProductForm />}
      {lastSegment === "orders" && <OrderDet />}
      {/* Add more conditions if needed */}
    </div>
  );
}
