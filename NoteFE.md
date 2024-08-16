// lịch sử thanh toán
đầu tiên Fe cần Be gửi cho Fe API để gửi đi các thông tin như sau ví dụ :
{
"IdUseName" : "IdUseName" cái này m gửi t lúc đăng nhập ấy
"userInfo": {
"name": "phongda12",- string
"phone": "0869039628",string
"email": "phamthephong1_t65@hus.edu.vn",string
"city": "Hồ Chí Minh",string
"district": "Quận 2",string
"ward": "Phường Thảo Điền",string
"houseNumber": "2"string
},
tổng tiền cần thanh toán "totalAmount": "204,104,219",string
danh sách sản phẩm gồm tên, số lượng , tổng giá tiền số máy "products": [
máy 1
{
"name": "Dell 28",string
"quantity": 3,number
"price": 70672149,number
},
máy 2
{
"name": "Asus 100",string
"quantity": 1,number
"price": 26322998,number
},
máy 3
{
"name": "HP 81",string
"quantity": 7,,number
"price": 107109072,number
}
.....
],
"paymentTime": "16/08/2024 11:05:04 GMT+7",thời gian thanh toán :string
}

// và fe cần be gửi cho fe danh sách thanh toán nghĩa là danh sách cái trên
