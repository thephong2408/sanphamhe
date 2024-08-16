"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setDataSearch } from "@/app/redux/slices/dataSearch";
import { setDataCard } from "@/app/redux/slices/dataCard";

import { RootState } from "@/app/redux/store"; // Import kiểu trạng thái root của Redux

function Search() {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataList = useSelector(
    (state: RootState) => state.dataDispart.dataDispart
  );
  const [value, setValue] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (value.trim().length > 0) {
      const filtered = dataList.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setData(filtered);
      // console.log(filtered, "filtered");
    } else {
      setData([]);
    }
  }, [value]);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClickCard = (item: any) => {
    setValue("");
    dispatch(setDataCard(item));
    router.push(`/card/${item.name}`); // Điều hướng ngay khi nhấp vào sản phẩm
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      router.push(`/listsearch/${value}`);
      dispatch(setDataSearch(data)); // Đẩy dữ liệu tìm kiếm vào Redux store
      setValue("");
      setShowResults(false);
    }
  };

  useEffect(() => {
    setShowResults(value.trim().length > 0);
  }, [value]);

  return (
    <div className="flex items-center">
      <div className="relative md:h-[45px] h-[30px] f-full flex justify-between items-center border-[1px] border-[#ccc] dark:border-[#000] bg-white rounded-xl py-2">
        <div className="border-none h-full flex items-center rounded-l-full overflow-hidden">
          <input
            className="px-10 md:text-[15px] text-[12px] border-none md:w-[400px] w-[180px] block border-[1px] border-[#ccc] transition-all duration-300"
            type="text"
            placeholder="Nhập tên sản phẩm"
            value={value}
            onChange={handleValueChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        <button className="sm:w-[55px] w-[30px] md:h-[45px] h-[30px] text-white border-none rounded-r-xl ml-2 bg-[#fc5b31] force:text-[#ccc]">
          <FontAwesomeIcon
            className="sm:size-[20px] size-[15px]"
            icon={faMagnifyingGlass}
          />
        </button>

        {showResults && (
          <div className="absolute sm:max-h-[300px] max-h-[200px] rounded-xl z-50 overflow-y-auto sm:top-[50px] top-[40px] bg-[#fff] text-[#00011f] sm:p-5 p-2 w-full border-[1px] sm:text-[15px] text-[10px]">
            {data.length > 0 ? (
              data.map((item, index) => (
                <div key={index}>
                  <div
                    onClick={() => handleClickCard(item)}
                    className="w-full sm:h-[100px] h-[60px] py-2 px-2 flex justify-between hover:bg-[#ccc]"
                  >
                    <div className="h-full sm:w-[80px] w-[50px]">
                      <img
                        src="https://laptop88.vn/media/product/pro_poster_8407.jpg"
                        alt="sp"
                      />
                    </div>
                    <div className="flex-1 flex flex-col overflow-y-auto px-4">
                      <span className="w-full break-words font-bold">
                        {item.name}
                      </span>
                      <span className="w-full break-words">
                        Thông số cơ bản: {item.CPU} {item.RAM} {item.Storage}{" "}
                        {item.Screen} {item.Battery} {item.Weight}
                      </span>
                      <span className="w-full break-words font-medium">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center py-4">Không có sản phẩm</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
