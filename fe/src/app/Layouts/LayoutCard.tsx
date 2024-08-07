"use client";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function LayoutCard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean); // Tách URL thành các phần và lọc các phần rỗng
  const lastSegment = pathSegments[pathSegments.length - 1]; // Lấy phần cuối cùng của URL

  // Ánh xạ phần cuối cùng của URL đến các giá trị mong muốn
  let displayText;
  switch (lastSegment) {
    case "sale":
      displayText = "Khuyến mãi";
      break;
    case "history":
      displayText = "Lịch sử giao dịch";
      break;
    case "cart":
      displayText = "Giỏ hàng";
      break;
    case "login":
      displayText = "Đăng nhập";
      break;
    case "register":
      displayText = "Đăng ký";
      break;
    case "changepassword":
      displayText = "Đổi mật khẩu";
      break;
    case "signuppage":
      displayText = "Đăng ký";
      break;
    default:
      displayText = lastSegment; // Hiển thị phần cuối cùng của URL nếu không khớp với các giá trị đã chỉ định
  }

  return (
    <div className="w-full">
      <div className="w-full xl:hidden flex items-center space-x-5 text font-medium text-[15px]">
        <Link href={"/"}>
          <span>Trang chủ</span>
        </Link>
        <span className=" ">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        <span>{displayText}</span>
      </div>
      <div className="sm:text-[15px] text-[12px]">{children}</div>
    </div>
  );
}

export default LayoutCard;
