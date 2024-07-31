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
];

export default API;
