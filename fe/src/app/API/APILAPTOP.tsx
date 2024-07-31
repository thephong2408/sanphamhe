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
  category: string;
}

// Laptop data
const APILAPTOP: Laptop[] = [
  {
    name: "Dell XPS 15",
    price: 25000000,
    brand: "Dell",
    CPU: "i7-13700H", // rút ngắn
    RAM: "16GB",
    GPU: "RTX 4050", // rút ngắn
    Storage: "1TB SSD",
    Screen: '15.6"', // rút ngắn
    Resolution: "3840x2400",
    Battery: "86Wh",
    Weight: "2.0 kg",
    category: "graphics",
  },
  {
    name: "Asus ROG Zephyrus G14",
    price: 21000000,
    brand: "Asus",
    CPU: "Ryzen 9 5900HS", // rút ngắn
    RAM: "32GB",
    GPU: "RTX 3060", // rút ngắn
    Storage: "512GB SSD",
    Screen: '14"', // rút ngắn
    Resolution: "2560x1600",
    Battery: "76Wh",
    Weight: "1.7 kg",
    category: "gaming",
  },
  {
    name: "Apple MacBook Pro 16",
    price: 35000000,
    brand: "Apple",
    CPU: "M2 Max", // rút ngắn
    RAM: "32GB",
    GPU: "M2 Max GPU", // rút ngắn
    Storage: "1TB SSD",
    Screen: '16.2"', // rút ngắn
    Resolution: "3456x2234",
    Battery: "100Wh",
    Weight: "2.1 kg",
    category: "graphics",
  },
  {
    name: "HP Omen 17",
    price: 27000000,
    brand: "HP",
    CPU: "i9-13900K", // rút ngắn
    RAM: "32GB",
    GPU: "RTX 4070", // rút ngắn
    Storage: "1TB SSD",
    Screen: '17.3"', // rút ngắn
    Resolution: "2560x1440",
    Battery: "83Wh",
    Weight: "3.1 kg",
    category: "gaming",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    price: 23000000,
    brand: "Lenovo",
    CPU: "i7-1365U", // rút ngắn
    RAM: "16GB",
    GPU: "Iris Xe", // rút ngắn
    Storage: "512GB SSD",
    Screen: '14"', // rút ngắn
    Resolution: "1920x1200",
    Battery: "57Wh",
    Weight: "1.1 kg",
    category: "graphics",
  },
  {
    name: "Acer Predator Helios 300",
    price: 22000000,
    brand: "Acer",
    CPU: "i7-12700H", // rút ngắn
    RAM: "16GB",
    GPU: "RTX 3060", // rút ngắn
    Storage: "512GB SSD",
    Screen: '15.6"', // rút ngắn
    Resolution: "1920x1080",
    Battery: "59Wh",
    Weight: "2.5 kg",
    category: "gaming",
  },
  {
    name: "Microsoft Surface Laptop Studio",
    price: 29000000,
    brand: "Microsoft",
    CPU: "i7-11370H", // rút ngắn
    RAM: "32GB",
    GPU: "RTX 3050 Ti", // rút ngắn
    Storage: "1TB SSD",
    Screen: '14.4"', // rút ngắn
    Resolution: "2400x1600",
    Battery: "58Wh",
    Weight: "1.8 kg",
    category: "graphics",
  },
  {
    name: "Gigabyte Aorus 15G",
    price: 26000000,
    brand: "Gigabyte",
    CPU: "i7-11800H", // rút ngắn
    RAM: "16GB",
    GPU: "RTX 3070", // rút ngắn
    Storage: "1TB SSD",
    Screen: '15.6"', // rút ngắn
    Resolution: "1920x1080",
    Battery: "99Wh",
    Weight: "2.2 kg",
    category: "gaming",
  },
  {
    name: "Razer Blade 15 Advanced",
    price: 32000000,
    brand: "Razer",
    CPU: "i9-12900H", // rút ngắn
    RAM: "32GB",
    GPU: "RTX 3080 Ti", // rút ngắn
    Storage: "1TB SSD",
    Screen: '15.6"', // rút ngắn
    Resolution: "3840x2160",
    Battery: "80Wh",
    Weight: "2.1 kg",
    category: "gaming",
  },
  {
    name: "MSI Creator Z16",
    price: 28000000,
    brand: "MSI",
    CPU: "i9-11900H", // rút ngắn
    RAM: "32GB",
    GPU: "RTX 3060", // rút ngắn
    Storage: "1TB SSD",
    Screen: '16"', // rút ngắn
    Resolution: "2560x1600",
    Battery: "90Wh",
    Weight: "2.0 kg",
    category: "graphics",
  },
  {
    name: "Samsung Galaxy Book Pro 360",
    price: 20000000,
    brand: "Samsung",
    CPU: "i7-1165G7", // rút ngắn
    RAM: "16GB",
    GPU: "Iris Xe", // rút ngắn
    Storage: "512GB SSD",
    Screen: '13.3"', // rút ngắn
    Resolution: "1920x1080",
    Battery: "63Wh",
    Weight: "1.0 kg",
    category: "graphics",
  },
  // Add more laptops as needed
];

export default APILAPTOP;
