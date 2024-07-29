"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function Search() {
  const [value, setValue] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setShowResults(value.trim().length > 0);
  }, [value]);

  return (
    <div className="sm:h-[35px] h-[25px] flex items-center">
      <div className="relative rounded-full">
        <input
          className="px-10 md:w-[500px] w-[230px] sm:h-[45px] h-[35px] text-[#323232] lg:text-[15px] text-[12px] border-none rounded-full bg-white"
          type="text"
          placeholder="Nhập tên sản phẩm"
          value={value}
          onChange={handleValueChange}
        />
        <button className="absolute top-0 right-0 sm:w-[45px] w-[30px] sm:h-[45px] h-[35px] bg-[#959595] text-white rounded-r-full">
          <FontAwesomeIcon
            className="sm:size-[20px] size-[15px]"
            icon={faMagnifyingGlass}
          />
        </button>

        {/* show results */}
        {showResults && (
          <div className="absolute sm:max-h-[300px] max-h-[200px] overflow-y-auto sm:top-[50px] top-[40px] z-10 bg-white sm:p-5 p-2 w-full border-[1px]  text-[#000] sm:text-[15px] text-[10px]">
            {/* san pham */}
            <div className="w-full sm:h-[100px] h-[60px]  py-2 flex justify-between hover:bg-[#ccc]">
              <div className="h-full sm:w-[80px] w-[50px] ">
                <img
                  src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/08/Hinh-nen-anime-cute-5-1.jpg.webp"
                  alt="sp"
                />
              </div>
              <div className="flex-1 flex flex-col overflow-y-auto px-4">
                <span className="w-full break-words font-bold">
                  Ten san pham
                </span>
                <span className="w-full break-words">Gia : 12 000 000</span>
                <span className="w-full break-words">Thong co ban :</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
