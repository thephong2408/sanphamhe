import {
    faCartShopping,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
    return (
        <div className=" sm:h-[35px] h-[25px]  flex items-center">
            <div className="relative  rounded-full ">
                <input
                    className="px-10 md:w-[500px] w-[250px] sm:h-[35px] h-[25px] text-[#323232] lg:text-[15px] text-[12px] border-none rounded-full bg-white  "
                    type="text"
                    placeholder="Nhập tên sản phẩm"
                />
                <button className="absolute top-0 right-0 sm:w-[45px] w-[30px] sm:h-[35px] h-[25px] bg-[#959595] text-white rounded-r-full">
                    <FontAwesomeIcon
                        className="sm:size-[20px] size-[15px]"
                        icon={faMagnifyingGlass}
                    />
                </button>
                {/* danh sách kết quả tìm được */}
                {/* <div className="absolute sm:top-[37px] top-[27px] rounded-sm left-0 w-full h-10 border-[1px] border-[#959595] bg-[#ffffff] ">ok</div> */}
            </div>
        </div>
    );
}

export default Search;
