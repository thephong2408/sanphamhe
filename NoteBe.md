- Sau khi pull về, cd be và chạy lệnh "php artisan migrate"
- api
  - api thanh toán
    - method post, url submit
    - key:
      - "IdUseName" : "IdUseName" cái này m gửi t lúc đăng nhập ấy
      - "name": "phongda12",- string
      - "phone": "0869039628",string
      - "email": "phamthephong1_t65@hus.edu.vn",string
      - "city": "Hồ Chí Minh",string
      - "district": "Quận 2",string
      - "ward": "Phường Thảo Điền",string
      - "houseNumber": "2"string
    - return:
      - 'success' (true/false)
  - api lấy danh sách đã thanh toán
    - method post, url history
    - key:
      - "IdUseName" : "IdUseName" cái này m gửi t lúc đăng nhập ấy
    - return:
      - 'success' (true/false)
      - 'history' (history là một object, để hiểu rõ hơn về output, xem code bên dưới)
  
```code
{
  "success": true,
  "history": [
    {
      "info": { //info chính là thông tin thanh toán
        "id": 1,
        "IdUserName": 1,
        "name": "John Doe",
        "email": "johndoe@example.com",
        "phone": "0123456789",
        "city": "Hà Nội",
        "district": "Cầu Giấy",
        "ward": "Quan Hoa",
        "houseNumber": "123"
        "timestamp": --/--/---- ...
      },
      "orders": [ //orders chính là các sản phẩm thanh toán, dựa theo info đã đăng kí
        {
          "id": 1,
          "info_id": 1,
          "name": "Product A",
          "quantity": 2,
          "price": 10000
        },
        {
          "id": 2,
          "info_id": 1,
          "name": "Product B",
          "quantity": 3,
          "price": 20000
        }
      ]
    },
    {
      "info": {
        "id": 2,
        "IdUserName": 1,
        "name": "Jane Doe",
        "email": "janedoe@example.com",
        "phone": "0987654321",
        "city": "Hà Nội",
        "district": "Cầu Giấy",
        "ward": "Quan Hoa",
        "houseNumber": "456"
        "timestamp": --/--/---- ...
      },
      "orders": [
        {
          "id": 3,
          "info_id": 2,
          "name": "Product C",
          "quantity": 1,
          "price": 30000
        }
      ]
    }
  ]
}
```

```code
{
  "success": true,
  "history": [
    {
      "info": {
        "id": 4,
        "IdUserName": 3,
        "name": "Alice Johnson",
        "email": "alicejohnson@example.com",
        "phone": "0987654321",
        "city": "Hà Nội",
        "district": "Ba Đình",
        "ward": "Phường 2",
        "houseNumber": "901"
        "timestamp": --/--/---- ...
      },
      "orders": [
        {
          "id": 5,
          "info_id": 4,
          "name": "Product E",
          "quantity": 2,
          "price": 50000
        }
      ]
    }
  ]
}
```