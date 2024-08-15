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
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

function Menu() {
  const [username, setUsername] = useState<string | null>(null);
  const usernames = useSelector((state: any) => state.dataDispart.dataUsername);
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setUsername(usernames);
  }, [usernames]);

  useEffect(() => {
    setShowLogin(username ? username.trim() !== "" : false);
  }, [username]);

  const handleLogout = () => {
    // Xóa dữ liệu khỏi localStorage
    localStorage.removeItem("email");
    localStorage.removeItem("Id");

    // Cập nhật trạng thái

    setUsername(null);
    setShowLogin(false);

    // Chuyển hướng người dùng về trang đăng nhập
    router.push("/login");
  };

  return (
    <span className="xl:hidden block">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-transparent">
          <div className="bg-transparent border-none hover:bg-transparent focus:border-none">
            <FontAwesomeIcon
              className=" sm:text-[30px] text-[30px] sm:ml-5 ml-5"
              icon={faBars}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="sm:w-[200px] w-[150px] sm:text-[18px] sm:py-3 mr-2">
          <DropdownMenuGroup>
            <Link href={"/"}>
              <DropdownMenuItem className="sm:text-[18px] sm:py-3 ">
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
              <DropdownMenuItem className="sm:text-[18px] sm:py-3 ">
                <FontAwesomeIcon
                  className="text-[#ccc] text-[12px] mr-2"
                  icon={faCartShopping}
                />{" "}
                Giỏ hàng
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          {showLogin && (
            <DropdownMenuGroup>
              <DropdownMenuSeparator />
              <Link href={"/history"}>
                <DropdownMenuItem className="sm:text-[18px] sm:py-3 ">
                  <FontAwesomeIcon
                    className="text-[#ccc] text-[12px] mr-2"
                    icon={faHistory}
                  />{" "}
                  Lịch sử
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
          )}

          <DropdownMenuGroup>
            <DropdownMenuSeparator />
            <Link href={"/signuppage"}>
              <DropdownMenuItem className="sm:text-[18px] sm:py-3 ">
                <i className="bx bx-user-plus text-[#ccc] text-[12px] mr-2"></i>{" "}
                Đăng kí
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href={"/login"}>
              <DropdownMenuItem className="sm:text-[18px] sm:py-3 ">
                <FontAwesomeIcon
                  className="text-[#ccc] text-[12px] mr-2"
                  icon={faSignInAlt}
                />
                Đăng Nhập
              </DropdownMenuItem>
            </Link>
            {showLogin && (
              <Link href={"/changepassword"}>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="sm:text-[18px] sm:py-3 ">
                  <FontAwesomeIcon
                    className="text-[#ccc] text-[12px] mr-2"
                    icon={faKey}
                  />
                  Đổi mật khẩu
                </DropdownMenuItem>
              </Link>
            )}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          {showLogin && (
            <DropdownMenuItem
              onClick={handleLogout}
              className="sm:text-[18px] sm:py-3 "
            >
              <FontAwesomeIcon
                className="text-[#ccc] text-[12px] mr-2"
                icon={faRightFromBracket}
              />{" "}
              Đăng xuất
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </span>
  );
}

export default Menu;
