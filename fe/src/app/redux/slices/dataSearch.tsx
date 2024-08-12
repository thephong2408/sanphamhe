import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataSearchState {
  dataSearch: any[]; // Thay đổi kiểu này thành kiểu dữ liệu chính xác nếu có
}

const initialState: DataSearchState = {
  dataSearch: [],
};

const dataSearchSlice = createSlice({
  name: "dataSearch",
  initialState,
  reducers: {
    setDataSearch: (state, action: PayloadAction<any[]>) => {
      // Thay đổi nội dung của state.dataSearch
      state.dataSearch = action.payload;
    },
  },
});

export const { setDataSearch } = dataSearchSlice.actions;

export default dataSearchSlice.reducer;
