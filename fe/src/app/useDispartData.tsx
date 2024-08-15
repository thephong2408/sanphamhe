// src/hooks/useDispartData.ts

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setDataDispart } from "@/app/redux/slices/dataDispart"; // Điều chỉnh đường dẫn nếu cần

const useDispartData = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get-laptops"
        );
        dispatch(setDataDispart(response.data)); // Cập nhật Redux store
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Có lỗi xảy ra!");
        setLoading(false);
        console.error("Có lỗi xảy ra!", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return { data, loading, error };
};

export default useDispartData;
