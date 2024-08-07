import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dataDispartState {
  dataDispart: any[]; // Thay đổi kiểu này thành kiểu dữ liệu chính xác nếu có
}

const initialState: dataDispartState = {
  dataDispart: [],
};

const dataDispartSlice = createSlice({
  name: "dataDispart",
  initialState,
  reducers: {
    setDataDispart: (state, action: PayloadAction<any[]>) => {
      // Thay đổi nội dung của state.dataDispart
      state.dataDispart = action.payload;
    },
  },
});

export const { setDataDispart } = dataDispartSlice.actions;

export default dataDispartSlice.reducer;
