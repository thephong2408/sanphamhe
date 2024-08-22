"use client";
import React from "react";

export default function Money({ price }: { price: number }) {
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return <>{formatPrice(price)}</>;
}
