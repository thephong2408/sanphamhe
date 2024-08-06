"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { setDataSearch } from "@/app/redux/slices/dataSearch";
import { useDispatch } from "react-redux";

import APILAPTOP from "@/app/API/APILAPTOP";
function Search() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleItemClick = (item: any) => {
    setValue("");
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      router.push(`/listsearch/${value}`);
      setValue("");
      setShowInput(false);
      setShowResults(false);
      // Chuyển hướng đến trang tìm kiếm
      if (value.trim().length > 0) {
        const filtered = APILAPTOP.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );

        dispatch(setDataSearch(filtered));

        console.log("dữ liệu chuyền vào", filtered);
      }
    }

    const filtered = APILAPTOP.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setData(filtered);
  };
  useEffect(() => {
    setShowResults(value.trim().length > 0);
  }, [value]);
  // console.log(data, showInput);

  return (
    <div
      onMouseLeave={() => {
        setShowInput(false);
        setValue("");
      }}
      onMouseEnter={() => setShowInput(true)}
      className=" flex items-center"
    >
      <div className="relative md:h-[45px]  h-[30px] f-full  flex justify-between items-center  ">
        <div
          className={classNames(
            "border-[1px] border-[#ccc] h-full flex items-center rounded-l-full overflow-hidden",
            {
              "w-[0px] border-none": !showInput,
            }
          )}
        >
          <input
            className={classNames(
              "px-10  text-[#323232] md:text-[15px] text-[12px] border-none  border-[1px] border-[#ccc] bg-white transition-all duration-300",
              {
                "md:w-[400px] w-[180px] block": showInput,
                "w-[0px] ": !showInput,
              }
            )}
            type="text"
            placeholder="Nhập tên sản phẩm"
            value={value}
            onChange={handleValueChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* <Link href={`/listsearch/${value}`}> */}
        <button
          onClick={handleItemClick}
          className=" sm:w-[55px] w-[30px] md:h-[45px] h-[30px] bg-[#070707] border-[1px] text-white rounded-r-full force:text-[#ccc]"
        >
          <FontAwesomeIcon
            className="sm:size-[25px] size-[15px]"
            icon={faMagnifyingGlass}
          />
        </button>
        {/* </Link> */}
        {/* show results */}

        {showResults && showInput && (
          <div
            onMouseEnter={() => setShowInput(true)}
            className="absolute sm:max-h-[300px] max-h-[200px] z-50 overflow-y-auto sm:top-[50px] top-[40px]  bg-white sm:p-5 p-2 w-full border-[1px]  text-[#000] sm:text-[15px] text-[10px]"
          >
            {/* san pham */}

            {data.length > 0 ? (
              data.map((item: any, index: number) => (
                <div key={index}>
                  <Link href={`/card/${item.name}`}>
                    <div className="w-full sm:h-[100px] h-[60px] py-2 flex justify-between hover:bg-[#ccc]">
                      <div className="h-full sm:w-[80px] w-[50px]">
                        <img
                          src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/08/Hinh-nen-anime-cute-5-1.jpg.webp"
                          alt="sp"
                        />
                      </div>
                      <div className="flex-1 flex flex-col overflow-y-auto px-4">
                        <span className="w-full break-words font-bold">
                          {item.name}
                        </span>
                        <span className="w-full break-words">
                          Thông số cơ bản: {item.CPU}, {item.RAM}, {item.ROM},{" "}
                          {item.screen}
                        </span>
                        <span className="w-full break-words">{item.price}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="w-full text-center py-4 text-gray-500">
                Không có sản phẩm
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
