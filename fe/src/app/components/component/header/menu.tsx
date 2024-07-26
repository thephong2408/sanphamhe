import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
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
          <div
            className="bg-transparent border-none hover:bg-transparent focus:border-none"
           
          >
            <FontAwesomeIcon
              className="text-[#ffffff] sm:size-[30px] size-[20px] ml-5"
              icon={faBars}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Danh sách</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Home</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Giỏ hàng</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Vị trí</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Chính sách bảo hành</DropdownMenuItem>
          <DropdownMenuGroup>
          <DropdownMenuSeparator />
            <DropdownMenuItem>Phạm Thế Phong</DropdownMenuItem>
          <DropdownMenuSeparator />
          </DropdownMenuGroup>
          
          
          <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </span>
  );
}

export default Menu;
