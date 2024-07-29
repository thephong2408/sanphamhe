import { faBars } from "@fortawesome/free-solid-svg-icons";
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

function Menu() {
  return (
    <span className="xl:hidden block">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-transparent">
          <div className="bg-transparent border-none hover:bg-transparent focus:border-none">
            <FontAwesomeIcon
              className="text-[#ffffff] sm:size-[30px] size-[30px] ml-5"
              icon={faBars}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="sm:w-[200px] w-[150px] sm:text-[18px]">
          <DropdownMenuLabel className="sm:text-[18px] hover:bg-transparent">
            Danh sách
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="sm:text-[18px] ">
              Home
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="sm:text-[18px] ">
              Giỏ hàng
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="sm:text-[18px] ">
              Vị trí
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="sm:text-[18px] ">
            Chính sách bảo hành
          </DropdownMenuItem>
          <DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="sm:text-[18px] ">
              Phạm Thế Phong
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuGroup>

          <DropdownMenuItem className="sm:text-[18px] ">
            Đăng xuất
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </span>
  );
}

export default Menu;
