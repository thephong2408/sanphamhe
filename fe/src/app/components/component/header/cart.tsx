"use client";

import "boxicons/css/boxicons.min.css";
import { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PiShoppingCart } from "react-icons/pi";
import Link from "next/link";
import { setDataCard } from "@/app/redux/slices/dataCard";
import classNames from "classnames";
import useCartData from "@/app/useData";
import useDataCart from "@/app/useDataCart";
import useDispartData from "@/app/useDispartData";
import { addToCart } from "@/app/redux/slices/dataCart";
import { decryptData } from "@/components/ui/cryptoUtils";
import { RootState } from "@/app/redux/store";
import Money from "../../money/money";

function Cart() {
  const userId = useSelector((state: RootState) => state.dataDispart.dataId);
  const decryptedUserId = userId ? decryptData(userId) : "";
  const dispatch = useDispatch();
  const numericUserId = Number(decryptedUserId);

  const { data1, loading1, error1 } = useDataCart(numericUserId);
  const { data, loading, error } = useDispartData();

  // Tạo một map chứa quantity của các sản phẩm từ data1 chỉ một lần
  const productQuantityMap = useMemo(() => {
    return data1.reduce<Record<number, number>>((acc, item) => {
      acc[item.id_product] = item.quantity;
      return acc;
    }, {});
  }, [data1]);

  // Lọc và thêm quantity vào sản phẩm, chỉ khi data và productQuantityMap thay đổi
  const filteredData = useMemo(() => {
    return data
      .filter((product) => productQuantityMap[product.id] !== undefined)
      .map((product) => ({
        ...product,
        quantity: productQuantityMap[product.id],
      }));
  }, [data, productQuantityMap]);

  // Dispatch sản phẩm với quantity chỉ một lần khi filteredData thay đổi
  useEffect(() => {
    filteredData.forEach((productWithQuantity) => {
      dispatch(addToCart(productWithQuantity));
    });
  }, [filteredData, dispatch]);

  const dataCart = useSelector((state: any) => state.dataCart.dataCart);

  // Format giá tiền

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
                { "text-red-500": showShopping }
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
                            <Money price={item.price} /> VND
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="border-[1px] bg-white dark:bg-[#1a243d] shadow-xl  p-5 flex flex-col justify-center items-center w-[300px] h-[300px] rounded-xl">
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
