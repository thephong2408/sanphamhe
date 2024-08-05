Fe: cần một API gôm các dữ liệu:
với id lần lượt từ 1 đến ...
interface Laptop {

id:number
name: string;

img1: string;
img2: string; ảnh có nền trắng
price: number;
brand: string;
CPU: string;
RAM: string;
GPU: string;
Storage: string;
Screen: string;
Resolution: string;
Battery: string;
Weight: string;
category: string; // "Văn phòng", "Gaming", hoặc "Đồ họa"
time: string;
}
{
id:number
name: "",
img1:""  
 img2:""  
 price: ,
brand: "",
CPU: "",
RAM: "",
GPU: "",
Storage: "",
Screen: '"',
Resolution: "",
Battery: "",
Weight: "",
category: "(lọc),
time: "thời gian",
}

// một API về google map(nếu tìm được)

//API người dùng:
Đăng ký và đăng nhập: Để người dùng có thể đăng ký tài khoản mới hoặc đăng nhập vào tài khoản hiện có, đổi mật khẩu.
FE cần nhận về gmail số điện thoại và tên người dùng

Quản lý tài khoản: Để người dùng có thể cập nhật thông tin cá nhân, thay đổi mật khẩu, và quản lý địa chỉ giao hàng.
FE chuyền đi gamil mật khẩu cũ mật khẩu mới, nếu cần mã gửi về thì càng tốt

// API giỏ hàng:
Thêm sản phẩm vào giỏ hàng: Để thêm sản phẩm vào giỏ hàng của người dùng.
FE gửi cho BE mảng dạng [{name}{các thông tin sp1},{ },{}]
ví dụ [
{name,email,số điện thoại}
[ {
id:number
name: "",
price: ,
brand: "",
CPU: "",
RAM: "",
GPU: "",
Storage: "",
Screen: '"',
Resolution: "",
Battery: "",
Weight: "",
category: "(lọc),
time: "thời gian",

},{}.....
]
{}
]

Cập nhật giỏ hàng: FE cần be chuyền về list các sản phẩm đã thêm vào giỏ hàng .

//
Thanh toán :
FE gửi cho BE: [{tên},{gmail},{sđt},{đại chỉ},{các sản phẩm},{Tổng số tiền cần thanh toán}]
khi click vào thanh toán thì các sản phẩm trong giỏ hàng bị xóa
BE : cần trả về 1: khi đã thanh toán hay chưa , 2 list các sản phẩm và tổng số tiền và thời than

Tóm tắt : 1 API sản phẩm, 1 API : đăng kí đăng nhập đổi mk , 1 API Giỏ hàng phục vụ cho thah toán
