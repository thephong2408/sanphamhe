// Định nghĩa interface Laptop
interface Laptop {
  name: string;
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

// Dữ liệu laptop theo các yêu cầu
const APILAPTOP: Laptop[] = [
  {
    name: "Apple MacBook Air M2",
    price: 19000000,
    brand: "Apple",
    CPU: "M2",
    RAM: "8GB",
    GPU: "M2 GPU",
    Storage: "256GB SSD",
    Screen: '13.6"',
    Resolution: "2560x1664",
    Battery: "52.6Wh",
    Weight: "1.24 kg",
    category: "Đồ họa",
    time: "2024-08-01T10:00:00Z", // Ví dụ giá trị thời gian
  },
  {
    name: "Dell Inspiron 15 3000",
    price: 16000000,
    brand: "Dell",
    CPU: "i5-1235U",
    RAM: "8GB",
    GPU: "Intel UHD",
    Storage: "512GB SSD",
    Screen: '15.6"',
    Resolution: "1920x1080",
    Battery: "42Wh",
    Weight: "1.84 kg",
    category: "Văn phòng",
    time: "2024-08-01T11:00:00Z",
  },
  {
    name: "HP Pavilion 15",
    price: 15000000,
    brand: "HP",
    CPU: "i5-1135G7",
    RAM: "8GB",
    GPU: "Iris Xe",
    Storage: "512GB SSD",
    Screen: '15.6"',
    Resolution: "1920x1080",
    Battery: "43Wh",
    Weight: "1.75 kg",
    category: "Văn phòng",
    time: "2024-08-01T12:00:00Z",
  },
  {
    name: "Lenovo IdeaPad 3",
    price: 14000000,
    brand: "Lenovo",
    CPU: "Ryzen 5 5500U",
    RAM: "8GB",
    GPU: "Radeon Graphics",
    Storage: "256GB SSD",
    Screen: '15.6"',
    Resolution: "1920x1080",
    Battery: "45Wh",
    Weight: "1.65 kg",
    category: "Văn phòng",
    time: "2024-08-01T13:00:00Z",
  },
  {
    name: "Asus VivoBook 15",
    price: 18000000,
    brand: "Asus",
    CPU: "i5-1155G7",
    RAM: "16GB",
    GPU: "Intel Iris Xe",
    Storage: "512GB SSD",
    Screen: '15.6"',
    Resolution: "1920x1080",
    Battery: "42Wh",
    Weight: "1.8 kg",
    category: "Văn phòng",
    time: "2024-08-01T14:00:00Z",
  },
  {
    name: "HP Omen 15",
    price: 20000000,
    brand: "HP",
    CPU: "Ryzen 7 5800H",
    RAM: "16GB",
    GPU: "RTX 3060",
    Storage: "512GB SSD",
    Screen: '15.6"',
    Resolution: "1920x1080",
    Battery: "70Wh",
    Weight: "2.3 kg",
    category: "Gaming",
    time: "2024-08-01T15:00:00Z",
  },
  {
    name: "Lenovo Legion 5",
    price: 19000000,
    brand: "Lenovo",
    CPU: "Ryzen 7 5800H",
    RAM: "16GB",
    GPU: "RTX 3060",
    Storage: "512GB SSD",
    Screen: '15.6"',
    Resolution: "1920x1080",
    Battery: "80Wh",
    Weight: "2.4 kg",
    category: "Gaming",
    time: "2024-08-01T16:00:00Z",
  },
  {
    name: "Asus TUF Gaming F15",
    price: 17000000,
    brand: "Asus",
    CPU: "i7-11370H",
    RAM: "16GB",
    GPU: "RTX 3050",
    Storage: "512GB SSD",
    Screen: '15.6"',
    Resolution: "1920x1080",
    Battery: "48Wh",
    Weight: "2.3 kg",
    category: "Gaming",
    time: "2024-08-01T17:00:00Z",
  },
  {
    name: "Dell Inspiron 14",
    price: 4500000,
    brand: "Dell",
    CPU: "i5-1235U",
    RAM: "8GB",
    GPU: "Intel UHD",
    Storage: "256GB SSD",
    Screen: '14"',
    Resolution: "1920x1080",
    Battery: "42Wh",
    Weight: "1.6 kg",
    category: "Văn phòng",
    time: "2024-08-01T18:00:00Z",
  },
  {
    name: "Lenovo IdeaPad Gaming 3",
    price: 9500000,
    brand: "Lenovo",
    CPU: "Ryzen 7 5800H",
    RAM: "16GB",
    GPU: "RTX 3050",
    Storage: "512GB SSD",
    Screen: '15.6"',
    Resolution: "1920x1080",
    Battery: "45Wh",
    Weight: "2.3 kg",
    category: "Gaming",
    time: "2024-08-01T19:00:00Z",
  },
  {
    name: "HP Pavilion 15",
    price: 8500000,
    brand: "HP",
    CPU: "i5-1155G7",
    RAM: "8GB",
    GPU: "Intel Iris Xe",
    Storage: "512GB SSD",
    Screen: '15.6"',
    Resolution: "1920x1080",
    Battery: "43Wh",
    Weight: "1.7 kg",
    category: "Văn phòng",
    time: "2024-08-01T20:00:00Z",
  },
  {
    name: "Asus ZenBook 14",
    price: 11500000,
    brand: "Asus",
    CPU: "i7-1165G7",
    RAM: "16GB",
    GPU: "Intel Iris Xe",
    Storage: "512GB SSD",
    Screen: '14"',
    Resolution: "1920x1080",
    Battery: "67Wh",
    Weight: "1.4 kg",
    category: "Văn phòng",
    time: "2024-08-01T21:00:00Z",
  },
];

export default APILAPTOP;
