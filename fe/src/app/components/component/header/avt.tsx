import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
function Avt() {
    return (
        <span className=" items-center xl:flex hidden ">
            <span className="relative">
                <FontAwesomeIcon
                    className="text-[#ffffff] sm:size-[30px] size-[25px] ml-5 sm:block hidden mr-10"
                    icon={faCartShopping}
                />
                {/* giỏ hàng */}
                {/* <div className="absolute sm:top-[35px] top-[25px] rounded-sm left-0 w-[300px] h-10 border-[1px] border-[#959595] bg-[#ffffff] ">ok</div> */}
            </span>
            <span className="flex">
                <FontAwesomeIcon className="size-[20px]" icon={faUser} />
                <span className="ml-2">Tài khoản</span>
            </span>
            {/* <span className="flex">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="ml-2">Phạm Thế Phong</span>
        </span> */}
        </span>
    );
}

export default Avt;
