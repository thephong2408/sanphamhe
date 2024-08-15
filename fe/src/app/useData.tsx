// useCartData.ts
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setDataListCart } from "@/app/redux/slices/dataDispart";

const useCartData = (Id: number) => {
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState<any[]>([]);

  const fetchCartData = useCallback(async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/get-cart", {
        id: Id,
      });
      setCartData(response.data);
      dispatch(setDataListCart(response.data));
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  }, [Id, dispatch]);

  return { cartData, fetchCartData };
};

export default useCartData;
