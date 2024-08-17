Fe: cần một API gôm các dữ liệu:
với id lần lượt từ 1 đến ...
interface Laptop {

id:number
name: string;
img: string; ảnh có nền trắng
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
time: string;// thời gian nhập hàng
}
{
id:number
name: "",
img:""  
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
Đăng ký và đăng nhập: Để người dùng có thể đăng ký tài khoản mới hoặc đăng
đang kí thì FE chuyền cho Be :
const dataToSend = {
name: name,
email: email,
phone: phone,
password: password
};

// Gửi yêu cầu POST đến backend
axios.post('https://api.example.com/register', dataToSend)
.then(response => {
console.log('Đăng ký thành công:', response.data);
})
.catch(error => {
console.error('Có lỗi xảy ra khi đăng ký:', error);
});
}

nhập vào tài khoản hiện có, đổi mật khẩu.
BE cần trả cho PE 3 giá trị : name - gmail - phone
const dataToSend = {
email: email,
password: password
};

// Gửi yêu cầu POST đến backend
axios.post('https://api.example.com/login', dataToSend)
.then(response => {
// Xử lý phản hồi từ backend
const userData = response.data;
console.log('Tên:', userData.name);
console.log('Email:', userData.email);
console.log('Số điện thoại:', userData.phone);
})
.catch(error => {
console.error('Có lỗi xảy ra khi đăng nhập:', error);
});
}

// API giỏ hàng:
Thêm sản phẩm vào giỏ hàng: Để thêm sản phẩm vào giỏ hàng của người dùng.
FE gửi cho BE mảng danh sách sản phẩm đã thêm vào giở hàng
ví dụconst dataToSend = {
username: 'JohnDoe',
productList: [
{ sản phẩm thêm vào giở hàng },
]
};
axios.post('https://api.example.com/submit', dataToSend)
.then(response => {
console.log('Dữ liệu đã được gửi thành công:', response.data);
})
.catch(error => {
console.error('Có lỗi xảy ra khi gửi dữ liệu:', error);
})

BE cần trả fe list các danh sách sản phẩm đã thêm vào giỏ hàng

//
Thanh toán :
FE gửi cho BE
khi click vào thanh toán thì fe sẽ chuyền cho be : dữ liệu dạng :
// Dữ liệu cần gửi
const data = {
// thông tin người cần gửi
userInfo: {
name: 'phongda12',
phone: '0869039628',
email: 'phamthephong_t65@hus.edu.vn',
city: 'Hồ Chí Minh',
district: 'Quận 4',
ward: 'Phường 3',
houseNumber: '2'
},
totalAmount: '106,000,000',
// danh sách và số lượng sản phẩm và tiền
products: [
{
name: 'Apple MacBook Air M2',
quantity: 2,
price: 38000000
},
{
name: 'Dell Inspiron 15 3000',
quantity: 3,
price: 48000000
},
{
name: 'HP Omen 15',
quantity: 1,
price: 20000000
}
],
// thời gian
paymentTime: '06/08/2024 14:45:37 GMT+7'
};

// Gửi yêu cầu POST đến API
fetch('https://api.example.com/payment', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
.then(response => response.json())
.then(responseData => {
console.log('Thanh toán thành công:', responseData);
})
.catch(error => {
console.error('Có lỗi xảy ra khi thanh toán:', error);
});

BE : cần trả cho FE danh sách thanh toán : thêm 1 mục là thanh toán chưa

Tóm tắt : 1 API sản phẩm, 1 API : đăng kí đăng nhập đổi mk , 1 API Giỏ hàng phục vụ cho thah toán
