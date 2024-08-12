import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu dữ liệu cho state
interface DataDispartState {
  dataDispart: any[]; // Thay đổi kiểu này thành kiểu dữ liệu chính xác nếu có
  dataPhone: string; // Đổi thành string thay vì array
}

const initialState: DataDispartState = {
  dataDispart: [],
  dataPhone: "",
};

const dataDispartSlice = createSlice({
  name: "dataDispart",
  initialState,
  reducers: {
    setDataDispart: (state, action: PayloadAction<any[]>) => {
      state.dataDispart = action.payload;
    },
    setDataPhone: (state, action: PayloadAction<string>) => {
      // Thay đổi kiểu dữ liệu từ any[] thành string
      state.dataPhone = action.payload;
    },
    clearDataPhone: (state) => {
      state.dataPhone = ""; // Xóa dữ liệu dataPhone
    },
  },
});

export const { setDataDispart, setDataPhone, clearDataPhone } =
  dataDispartSlice.actions;

export default dataDispartSlice.reducer;
