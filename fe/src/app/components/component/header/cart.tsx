"use client";

import "boxicons/css/boxicons.min.css";
import { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PiShoppingCart } from "react-icons/pi";
import Link from "next/link";
import { setDataCard } from "@/app/redux/slices/dataCard";
import classNames from "classnames";
import useCartData from "@/app/useData";

function Cart() {
  const userId = useSelector((state: any) => state.dataDispart.dataId);
  const dataCart = useSelector((state: any) => state.dataCart.dataCart);

  const dispatch = useDispatch();

  // Sử dụng hook useCartData
  const { cartData, fetchCartData } = useCartData(userId);

  // Format giá tiền
  const formatPrice = (price: number | undefined) => {
    if (price === undefined) {
      return "";
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleCard = (item: any) => {
    dispatch(setDataCard(item));
  };

  const [showShopping, setShowShopping] = useState<boolean>(false);

  return (
    <div className="items-center xl:flex hidden z-50 h-full">
      <span
        onMouseEnter={() => setShowShopping(true)}
        onMouseLeave={() => setShowShopping(false)}
        className="relative"
      >
        <span className="relative">
          <Link href="/cart">
            <PiShoppingCart
              className={classNames(
                "sm:size-[35px] size-[25px] ml-5 sm:block hidden mr-10",
                { "text-red-500": showShopping, "": !showShopping }
              )}
            />
          </Link>
          <div className="w-[20px] text-white h-[20px] bg-red-500 rounded-full absolute top-[-2px] font-medium right-[17px] flex items-center justify-center">
            {dataCart.length}
          </div>
        </span>

        {showShopping && (
          <div className="absolute sm:bottom-[0px] top-[35px] z-50 right-0 pt-5">
            {dataCart.length > 0 ? (
              <div className="rounded-lg border-[1px] overflow-hidden shadow-md dark:bg-[#1a243d] bg-white dark:text-white p-5">
                <Link href="/cart">
                  <div
                    onClick={() => setShowShopping(false)}
                    className="h-[40px] text-3xl w-full flex pl-2 items-center border-b-[1px] border-[#ccc] cursor-pointer"
                  >
                    <span className="w-full">Xem tất cả</span>
                  </div>
                </Link>
                <div className="relative rounded-sm border-[1px] w-[400px] sm:max-h-[400px] max-h-[200px] overflow-y-auto p-2">
                  {dataCart.map((item: any, index: number) => (
                    <div key={index}>
                      <div className="relative w-full sm:h-[100px] h-[70px] py-2 flex justify-between pr-20">
                        <div
                          onClick={() => handleCard(item)}
                          className="h-full sm:w-[80px] w-[50px]"
                        >
                          <Link href={`/card/${item.name}`}>
                            <img
                              src="https://laptop88.vn/media/product/pro_poster_8407.jpg"
                              alt="sp"
                            />
                          </Link>
                        </div>
                        <div className="flex-1 flex flex-col overflow-y-auto px-4">
                          <span className="w-full break-words font-medium">
                            {item.name}
                          </span>
                          <span className="w-full break-words text-[13px]">
                            {item.CPU} {item.RAM} {item.GPU} {item.Storage}{" "}
                            {item.Weight}
                          </span>
                          <span className="w-full font-medium">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-[#1a243d] text-white p-5 flex flex-col justify-center items-center w-[300px] h-[300px] rounded-xl">
                <div className="size-[100px] border-none bg-transparent">
                  <img
                    src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg"
                    alt=""
                  />
                </div>
                <span className="w-full text-center mt-5">
                  Không có sản phẩm nào
                </span>
              </div>
            )}
          </div>
        )}
      </span>
    </div>
  );
}

export default Cart;
