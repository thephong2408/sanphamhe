"use client";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import API from "@/app/API/API";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PiSealFill } from "react-icons/pi";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToBill } from "@/app/redux/slices/dataBill";
import { clearCart } from "@/app/redux/slices/dataCart";
import { useSelector } from "react-redux";
import axios from "axios";

interface UserProps {
  totalPrice: string;
  productDetails: any;
  currentTime: string;
}

const User: React.FC<UserProps> = ({
  totalPrice,
  productDetails,
  currentTime,
}) => {
  // console.log(totalPrice, productDetails, "tổng tiền cần thanh toán");

  const dispatch = useDispatch();
  // dữ liệu QRCode
  const [qrData, setQrData] = useState<string | null>(null);

  // Trạng thái của các trường nhập liệu
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [houseNumber, setHouseNumber] = useState("");

  // Trạng thái của dữ liệu cho các thành phố, quận huyện, và xã
  const [cities, setCities] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [wards, setWards] = useState<string[]>([]);

  // Trạng thái của các lựa chọn được chọn
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedWard, setSelectedWard] = useState<string | null>(null);

  // Trạng thái lỗi cho từng trường
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [cityError, setCityError] = useState<string | null>(null);
  const [districtError, setDistrictError] = useState<string | null>(null);
  const [wardError, setWardError] = useState<string | null>(null);
  const [houseNumberError, setHouseNumberError] = useState<string | null>(null);
  // lấy ra id name
  const userId = useSelector((state: any) => state.dataDispart.dataId);

  // Thanh toán

  // hiện thông báo khi thanh toán
  const [isPaymentMethodOpen, setIsPaymentMethodOpen] =
    useState<boolean>(false);

  useEffect(() => {
    const cityNames = API.map((city) => city.city);
    setCities(cityNames);
  }, []);

  // Xử lý thay đổi thành phố
  const handleCityChange = (city: string) => {
    const selectedCityData = API.find((c) => c.city === city);
    if (selectedCityData) {
      setDistricts(selectedCityData.districts.map((d) => d.name));
      setWards([]); // Reset wards when city changes
      setSelectedCity(city);
      setSelectedDistrict(null);
      setSelectedWard(null);
    }
  };

  // Xử lý thay đổi quận huyện
  const handleDistrictChange = (district: string) => {
    const selectedCityData = API.find((c) => c.city === selectedCity);
    if (selectedCityData) {
      const selectedDistrictData = selectedCityData.districts.find(
        (d) => d.name === district
      );
      if (selectedDistrictData) {
        setWards(selectedDistrictData.wards);
        setSelectedDistrict(district);
        setSelectedWard(null); // Reset ward when district changes
      }
    }
  };

  // Xác thực số điện thoại
  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10,15}$/; // Ví dụ về regex cho số điện thoại
    return phoneRegex.test(phone);
  };

  // Xác thực email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Ví dụ về regex cho email
    return emailRegex.test(email);
  };

  // Xử lý sự kiện submit
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Xác thực và thiết lập lỗi cho từng trường
    const newNameError = name.trim() === "" ? "Vui lòng nhập tên." : null;
    const newPhoneError = !validatePhone(phone)
      ? "Số điện thoại không hợp lệ."
      : null;
    const newEmailError = !validateEmail(email) ? "Email không hợp lệ." : null;
    const newCityError = !selectedCity ? "Vui lòng chọn thành phố." : null;
    const newDistrictError = !selectedDistrict
      ? "Vui lòng chọn quận huyện."
      : null;
    const newWardError = !selectedWard ? "Vui lòng chọn xã." : null;
    // const newHouseNumberError =
    //   houseNumber.trim() === "" ? "Vui lòng nhập số nhà." : null;

    setNameError(newNameError);
    setPhoneError(newPhoneError);
    setEmailError(newEmailError);
    setCityError(newCityError);
    setDistrictError(newDistrictError);
    setWardError(newWardError);
    // setHouseNumberError(newHouseNumberError);

    // Nếu không có lỗi, tiến hành xử lý dữ liệu
    if (
      !newNameError &&
      !newPhoneError &&
      !newEmailError &&
      !newCityError &&
      !newDistrictError &&
      !newWardError &&
      // !newHouseNumberError &&
      totalPrice !== "0"
    ) {
      // Xuất lý dữ liệu thông tin người dùng

      // Nếu houseNumber là chuỗi rỗng, cập nhật nó thành "Không có"

      // Tạo formData với giá trị houseNumber đã được cập nhật
      const formData = {
        userId: userId,
        name: name,
        phone: phone,
        email: email,
        city: selectedCity,
        district: selectedDistrict,
        ward: selectedWard,
        houseNumber: houseNumber === "" ? "Không có" : houseNumber, // Sử dụng giá trị đã cập nhật
      };
      console.log("Thanh toán:", formData);
      try {
        await axios.post("http://127.0.0.1:8000/api/submit", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Lỗi khi gửi dữ liệu:", error);
      }

      // Tạo payload để gửi tới redux
      const payload = {
        formData,
        totalPrice,
        productDetails,
        currentTime,
      };

      // Xử lý thanh toán
      dispatch(addToBill(payload));

      // dữ liệu chuyền đi cho API
      // dispatch(clearCart());
      const qrCodeData = `https://your-payment-gateway.com/pay?amount=${encodeURIComponent(
        totalPrice
      )}`;

      // Xử lý QRCode
      setQrData(qrCodeData);

      // hiện thông báo khi thanh toán khi tất cả các trường đều úng
      setIsPaymentMethodOpen(true);

      // Log form data or perform an action (e.g., send to API)
      // console.log("Form Data Submitted:", [formData, laptop]);
    } else {
      setIsPaymentMethodOpen(false);
    }
  };
  // phương thức thanh toán
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  // Xử lý thay đổi lựa chọn phương thức thanh toán
  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:space-y-10 space-y-5 mt-10 mb-10 dark:text-white"
    >
      {/* Thong tin nguoi mua hang */}
      <div className="relative">
        <label
          htmlFor="name"
          className="block font-medium  sm:text-[18px] text-[15px] "
        >
          <span className="relative ">
            Tên
            <span className="text-[#a41919] size-[8px] absolute top-[-4x] right-[-10px]">
              *
            </span>
          </span>
        </label>
        <div className="p-3 border-[1px] shadow-sm rounded-lg  ">
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Nhập tên"
            onChange={(e) => setName(e.target.value)}
            className="block w-full text-[15px]"
          />
        </div>
        {nameError && (
          <span className="text-red-500 text-sm  absolute bottom-[-15px] ">
            {nameError}
          </span>
        )}
      </div>

      {/* SDT người mua hàng */}

      <div className="relative">
        <label
          htmlFor="phone"
          className="block font-medium  sm:text-[18px] text-[15px]"
        >
          <span className="relative ">
            Số điện thoại
            <span className="text-[#a41919] size-[8px] absolute top-[-4x] right-[-10px]">
              *
            </span>
          </span>
        </label>
        <div className="p-3 border-[1px] shadow-sm rounded-lg ">
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Nhập số điện thoại"
            className="block w-full text-[15px]"
          />
        </div>
        {phoneError && (
          <span className="text-red-500 text-sm  absolute bottom-[-15px] ">
            {phoneError}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="relative">
        <label
          htmlFor="email"
          className="block font-medium  sm:text-[18px] text-[15px]"
        >
          <span className="relative ">
            Email
            <span className="text-[#a41919] size-[8px] absolute top-[-4x] right-[-10px]">
              *
            </span>
          </span>
        </label>
        <div className="p-3 border-[1px] shadow-sm rounded-lg ">
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email"
            className="block w-full text-[15px]"
          />
        </div>
        {emailError && (
          <span className="text-red-500 text-sm  absolute bottom-[-15px] ">
            {emailError}
          </span>
        )}
      </div>

      {/* Địa chỉ người mua hàng */}
      <div className="relative">
        <label
          htmlFor="city"
          className="block font-medium  sm:text-[18px] text-[15px]"
        >
          <span className="relative ">
            Thành phố
            <span className="text-[#a41919] size-[8px] absolute top-[-4x] right-[-10px]">
              *
            </span>
          </span>
        </label>
        <Select onValueChange={handleCityChange}>
          <SelectTrigger className="w-full sm:text-[15px] h-[40px] text-[12px] ring-0 focus:ring-0 border-[1px] focus-visible:ring-offset-0 focus-visible:ring-0">
            <SelectValue placeholder="Chọn thành phố" />
          </SelectTrigger>
          <SelectContent className="w-full">
            <SelectGroup className="w-full">
              {cities.map((city) => (
                <SelectItem
                  key={city}
                  value={city}
                  className="sm:text-[15px] text-[12px] w-[100%]"
                >
                  {city}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {cityError && (
          <span className="text-red-500 text-sm  absolute bottom-[-15px] ">
            {cityError}
          </span>
        )}
      </div>

      <div className="relative">
        <label
          htmlFor="district"
          className="block font-medium  sm:text-[18px] text-[15px]"
        >
          <span className="relative ">
            Quận huyện
            <span className="text-[#a41919] size-[8px] absolute top-[-4x] right-[-10px]">
              *
            </span>
          </span>
        </label>
        <Select onValueChange={handleDistrictChange} disabled={!selectedCity}>
          <SelectTrigger className="w-full sm:text-[15px] h-[40px] text-[12px] ring-0 focus:ring-0 border-[1px] focus-visible:ring-offset-0 focus-visible:ring-0">
            <SelectValue placeholder="Chọn quận huyện" />
          </SelectTrigger>
          <SelectContent className="w-full">
            <SelectGroup className="w-full">
              {districts.map((district) => (
                <SelectItem
                  key={district}
                  value={district}
                  className="sm:text-[15px] text-[12px] w-full"
                >
                  {district}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {districtError && (
          <span className="text-red-500 text-sm  absolute bottom-[-15px] ">
            {districtError}
          </span>
        )}
      </div>

      <div className="relative">
        <label
          htmlFor="ward"
          className="block font-medium  sm:text-[18px] text-[15px]"
        >
          <span className="relative ">
            Xã
            <span className="text-[#a41919] size-[8px] absolute top-[-4x] right-[-10px]">
              *
            </span>
          </span>
        </label>
        <Select
          onValueChange={(value) => setSelectedWard(value)}
          disabled={!selectedDistrict}
        >
          <SelectTrigger className="w-full sm:text-[15px] h-[40px] text-[12px] ring-0 focus:ring-0 border-[1px] focus-visible:ring-offset-0 focus-visible:ring-0">
            <SelectValue placeholder="Chọn xã" />
          </SelectTrigger>
          <SelectContent className="w-full">
            <SelectGroup className="w-full">
              {wards.map((ward) => (
                <SelectItem
                  key={ward}
                  value={ward}
                  className="sm:text-[15px] text-[12px] w-full"
                >
                  {ward}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {wardError && (
          <span className="text-red-500 text-sm  absolute bottom-[-15px] ">
            {wardError}
          </span>
        )}
      </div>

      <div className="relative">
        <label
          htmlFor="houseNumber"
          className="block font-medium  sm:text-[18px] text-[15px]"
        >
          Số nhà
        </label>
        <div className="px-3 py-2 sm:p-5 border-[1px] shadow-sm rounded-lg ">
          <input
            type="text"
            id="houseNumber"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
            placeholder="Nhập số nhà"
            className="w-full sm:text-[15px] h-[30px] text-[12px]"
          />
        </div>
        {houseNumberError && (
          <span className="text-red-500 text-sm  absolute bottom-[-15px] ">
            {houseNumberError}
          </span>
        )}
      </div>
      {/* Tổng giá trị đơn hàng */}
      <div className="w-full border-[1px] rounded-lg shadow-sm h-[50px]  flex justify-center items-center text-2xl  ">
        Tổng hóa đơn : {totalPrice} VND
      </div>
      {/* phương thức thanh toán */}
      <div className="sm:flex sm:space-x-10 sm:space-y-0 space-y-10 sm:px-0 px-[40px]  py-[20px] justify-center items-center">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="onlinePayment"
            name="paymentMethod"
            value="online"
            checked={paymentMethod === "online"}
            onChange={handlePaymentMethodChange}
            className="size-[15px]  border-none"
          />
          <label
            htmlFor="onlinePayment"
            className="text-[12px] font-medium leading-none"
          >
            Thanh toán luôn
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={handlePaymentMethodChange}
            className="size-[15px]  border-none"
          />
          <label htmlFor="cod" className="text-[12px] font-medium leading-none">
            Nhận hàng rồi thanh toán
          </label>
        </div>
      </div>
      {paymentMethod === "online" && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              type="submit"
              className="p-8 text-2xl text-blue-600 border-[1px] border-blue-600 hover:text-white hover:bg-blue-600"
              variant="outline"
            >
              Thanh toán
            </Button>
          </AlertDialogTrigger>
          {isPaymentMethodOpen && (
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Quét mã QR thanh toán</AlertDialogTitle>
                <AlertDialogDescription>
                  <span className="w-full h-[300px]  flex items-center justify-center">
                    ok
                  </span>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          )}
        </AlertDialog>
      )}

      {/* Xác nhận thanh toán khi nhận hàng */}
      {paymentMethod === "cod" && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              type="submit"
              className="p-8 text-2xl text-blue-600 border-[1px] border-blue-600 hover:text-white hover:bg-blue-600"
              variant="outline"
            >
              Xác nhận
            </Button>
          </AlertDialogTrigger>
          {isPaymentMethodOpen && (
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Xác nhận thanh toán</AlertDialogTitle>
                <AlertDialogDescription>
                  <span className="w-full h-[300px] bg-emerald-400 text-white font-bold text-3xl flex justify-center items-center">
                    Xác nhận thành công
                  </span>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          )}
        </AlertDialog>
      )}
    </form>
  );
};

export default User;
