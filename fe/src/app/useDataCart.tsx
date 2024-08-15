// src/hooks/useDataCart.ts

import { useEffect, useState } from "react";
import axios from "axios";

interface CartItem {
  id_product: number;
  quantity: number;
}

const useDataCart = (id: number) => {
  const [data1, setData] = useState<CartItem[]>([]);
  const [loading1, setLoading] = useState<boolean>(true);
  const [error1, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/get-cart",
          { id }
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Có lỗi xảy ra khi gọi API!");
        setLoading(false);
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchCartData();
  }, [id]);

  return { data1, loading1, error1 };
};

export default useDataCart;
