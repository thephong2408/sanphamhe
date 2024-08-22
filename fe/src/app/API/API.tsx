interface Ward {
  name: string;
}

interface District {
  name: string;
  wards: Ward[];
}

interface City {
  city: string;
  districts: District[];
}
const API = [
  {
    city: "Hà Nội",
    districts: [
      {
        name: "Quận Hoàn Kiếm",
        wards: [
          "Phường Hàng Bạc",
          "Phường Hàng Đào",
          "Phường Cửa Đông",
          "Phường Hàng Bồ",
          "Phường Đồng Xuân",
        ],
      },
      {
        name: "Quận Ba Đình",
        wards: [
          "Phường Phúc Xá",
          "Phường Vĩnh Phúc",
          "Phường Cống Vị",
          "Phường Kim Mã",
          "Phường Đội Cấn",
        ],
      },
      {
        name: "Quận Đống Đa",
        wards: [
          "Phường Trung Liệt",
          "Phường Trung Tự",
          "Phường Văn Chương",
          "Phường Khâm Thiên",
          "Phường Ngã Tư Sở",
        ],
      },
      {
        name: "Quận Tây Hồ",
        wards: [
          "Phường Xuân La",
          "Phường Nhật Tân",
          "Phường Quảng An",
          "Phường Thụy Khuê",
          "Phường Tây Hồ",
        ],
      },
      // Add more districts and wards here
    ],
  },
  {
    city: "Hồ Chí Minh",
    districts: [
      {
        name: "Quận 1",
        wards: [
          "Phường Bến Nghé",
          "Phường Bến Thành",
          "Phường Nguyễn Thái Bình",
          "Phường Cô Giang",
          "Phường Đa Kao",
        ],
      },
      {
        name: "Quận 2",
        wards: [
          "Phường An Phú",
          "Phường Bình An",
          "Phường Thảo Điền",
          "Phường An Khánh",
          "Phường Cát Lái",
        ],
      },
      {
        name: "Quận 3",
        wards: [
          "Phường Võ Thị Sáu",
          "Phường Nguyễn Thị Minh Khai",
          "Phường 6",
          "Phường 7",
          "Phường 8",
        ],
      },
      {
        name: "Quận 4",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5"],
      },
      // Add more districts and wards here
    ],
  },
  {
    city: "Đà Nẵng",
    districts: [
      {
        name: "Quận Hải Châu",
        wards: [
          "Phường Thạch Thang",
          "Phường Hòa Thuận Đông",
          "Phường Hòa Cường Bắc",
          "Phường Nam Dương",
          "Phường Bình Thuận",
        ],
      },
      {
        name: "Quận Sơn Trà",
        wards: [
          "Phường An Hải Bắc",
          "Phường An Hải Tây",
          "Phường An Hải Đông",
          "Phường Mân Thái",
          "Phường Nại Hiên Đông",
        ],
      },
      {
        name: "Quận Ngũ Hành Sơn",
        wards: [
          "Phường Mỹ An",
          "Phường Mỹ Khe",
          "Phường Hòa Quý",
          "Phường Hòa Hải",
          "Phường Hòa Phát",
        ],
      },
      {
        name: "Huyện Hòa Vang",
        wards: [
          "Xã Hòa Phong",
          "Xã Hòa Sơn",
          "Xã Hòa Tiến",
          "Xã Hòa Khương",
          "Xã Hòa Nhơn",
        ],
      },
      // Add more districts and wards here
    ],
  },
  {
    city: "Cần Thơ",
    districts: [
      {
        name: "Quận Ninh Kiều",
        wards: [
          "Phường An Cư",
          "Phường An Hòa",
          "Phường An Bình",
          "Phường Cái Khế",
          "Phường Cái Răng",
        ],
      },
      {
        name: "Quận Bình Thủy",
        wards: [
          "Phường Bình Thủy",
          "Phường Long Hòa",
          "Phường Trà An",
          "Phường Trà Nóc",
          "Phường Bùi Hữu Nghĩa",
        ],
      },
      {
        name: "Quận Cái Răng",
        wards: [
          "Phường Hưng Phú",
          "Phường Lê Bình",
          "Phường Thường Thạnh",
          "Phường Thường Thới",
          "Phường Trường Lạc",
        ],
      },
      {
        name: "Huyện Ô Môn",
        wards: [
          "Xã Thới Hòa",
          "Xã Thới Tam Thôn",
          "Xã Thới Đông",
          "Xã Thới Long",
          "Xã Thới Xuân",
        ],
      },
      // Add more districts and wards here
    ],
  },
  // Add more cities, districts, and wards here
  {
    city: "Hải Phòng",
    districts: [
      {
        name: "Quận Ngô Quyền",
        wards: [
          "Phường Máy Tơ",
          "Phường Máy Chai",
          "Phường Lạc Viên",
          "Phường Cầu Đất",
          "Phường Gia Viên",
        ],
      },
      {
        name: "Quận Lê Chân",
        wards: [
          "Phường Đông Hải",
          "Phường Niệm Nghĩa",
          "Phường Kênh Dương",
          "Phường Vĩnh Niệm",
          "Phường Hồ Nam",
        ],
      },
      // Add more districts and wards here
    ],
  },
  {
    city: "Huế",
    districts: [
      {
        name: "Thành phố Huế",
        wards: [
          "Phường Phú Nhuận",
          "Phường Phú Hậu",
          "Phường Phú Bình",
          "Phường Phú Hòa",
          "Phường Vĩnh Ninh",
        ],
      },
      {
        name: "Huyện Phú Vang",
        wards: [
          "Xã Phú Mậu",
          "Xã Phú Mỹ",
          "Xã Phú Hồ",
          "Xã Phú An",
          "Xã Phú Thuận",
        ],
      },
      // Add more districts and wards here
    ],
  },
  {
    city: "Nha Trang",
    districts: [
      {
        name: "Thành phố Nha Trang",
        wards: [
          "Phường Lộc Thọ",
          "Phường Phước Long",
          "Phường Vĩnh Nguyên",
          "Phường Vĩnh Trường",
          "Phường Xương Huân",
        ],
      },
      {
        name: "Huyện Diên Khánh",
        wards: [
          "Xã Diên Phước",
          "Xã Diên Lạc",
          "Xã Diên Xuân",
          "Xã Diên Đồng",
          "Xã Diên Tân",
        ],
      },
      // Add more districts and wards here
    ],
  },
  {
    city: "Vũng Tàu",
    districts: [
      {
        name: "Thành phố Vũng Tàu",
        wards: [
          "Phường 1",
          "Phường 2",
          "Phường Thắng Tam",
          "Phường Thắng Nhì",
          "Phường Thắng Nhất",
        ],
      },
      {
        name: "Huyện Long Điền",
        wards: [
          "Xã Long Điền",
          "Xã An Ngãi",
          "Xã Phước Tỉnh",
          "Xã Phước Hưng",
          "Xã Tam Phước",
        ],
      },
      // Add more districts and wards here
    ],
  },
  {
    city: "Quảng Ninh",
    districts: [
      {
        name: "Thành phố Hạ Long",
        wards: [
          "Phường Bãi Cháy",
          "Phường Hồng Gai",
          "Phường Hà Khánh",
          "Phường Hà Lầm",
          "Phường Cao Thắng",
        ],
      },
      {
        name: "Thành phố Cẩm Phả",
        wards: [
          "Phường Cẩm Bình",
          "Phường Cẩm Đông",
          "Phường Cẩm Tây",
          "Phường Cẩm Trung",
          "Phường Cẩm Thịnh",
        ],
      },
      // Add more districts and wards here
    ],
  },
];

export default API;
