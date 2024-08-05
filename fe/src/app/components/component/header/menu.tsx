import {
  faBars,
  faCartShopping,
  faHistory,
  faHouse,
  faKey,
  faLockOpen,
  faPlus,
  faRightFromBracket,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Menu() {
  return (
    <span className="xl:hidden block">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-transparent">
          <div className="bg-transparent border-none hover:bg-transparent focus:border-none">
            <FontAwesomeIcon
              className=" sm:size-[30px] size-[30px] ml-5"
              icon={faBars}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="sm:w-[200px] w-[150px] sm:text-[18px] mr-2">
          <DropdownMenuGroup>
            <Link href={"/"}>
              <DropdownMenuItem className="sm:text-[18px] ">
                <FontAwesomeIcon
                  className="text-[#ccc] text-[12px] mr-2"
                  icon={faHouse}
                />{" "}
                Trang chủ
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={"/cart"}>
              <DropdownMenuItem className="sm:text-[18px] ">
                <FontAwesomeIcon
                  className="text-[#ccc] text-[12px] mr-2"
                  icon={faCartShopping}
                />{" "}
                Giỏ hàng
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={"/history"}>
              <DropdownMenuItem className="sm:text-[18px] ">
                <FontAwesomeIcon
                  className="text-[#ccc] text-[12px] mr-2"
                  icon={faHistory}
                />{" "}
                Lịch sử
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>

          <DropdownMenuGroup>
            <DropdownMenuSeparator />
            <Link href={"/signuppage"}>
              <DropdownMenuItem className="sm:text-[18px] ">
                <i className="bx bx-user-plus text-[#ccc] text-[12px] mr-2"></i>{" "}
                Đăng kí
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href={"/login"}>
              <DropdownMenuItem className="sm:text-[18px] ">
                <FontAwesomeIcon
                  className="text-[#ccc] text-[12px] mr-2"
                  icon={faSignInAlt}
                />
                Đăng Nhập
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href={"/changepassword"}>
              <DropdownMenuItem className="sm:text-[18px] ">
                <FontAwesomeIcon
                  className="text-[#ccc] text-[12px] mr-2"
                  icon={faKey}
                />
                Đổi mật khẩu
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
          </DropdownMenuGroup>

          <Link href={"/"}>
            <DropdownMenuItem className="sm:text-[18px] ">
              <FontAwesomeIcon
                className="text-[#ccc] text-[12px] mr-2"
                icon={faRightFromBracket}
              />{" "}
              Đăng xuất
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </span>
  );
}

export default Menu;
