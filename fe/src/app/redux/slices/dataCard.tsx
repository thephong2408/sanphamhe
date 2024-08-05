import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataCardState {
  dataCard: any[]; // Thay đổi kiểu này thành kiểu dữ liệu chính xác nếu có
}

const initialState: DataCardState = {
  dataCard: [],
};

const dataCardSlice = createSlice({
  name: "dataCard",
  initialState,
  reducers: {
    setDataCard: (state, action: PayloadAction<any[]>) => {
      // Thay đổi nội dung của state.dataCard
      state.dataCard = action.payload;
    },
  },
});

export const { setDataCard } = dataCardSlice.actions;

export default dataCardSlice.reducer;
