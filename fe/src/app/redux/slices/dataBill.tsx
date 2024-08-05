import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Cập nhật giao diện cho mục trong giỏ hàng
interface BillItem {
  productDetails: any;
  totalPrice: string;
  formData: any;
  currentTime: string;
  // Đổi từ formDatas thành formData
}

// Định nghĩa giao diện trạng thái
interface DataBillState {
  dataBill: BillItem[];
}

const initialState: DataBillState = {
  dataBill: [],
};

const dataBillSlice = createSlice({
  name: "dataBill",
  initialState,
  reducers: {
    // Định nghĩa hành động để thêm dữ liệu vào giỏ hàng
    addToBill: (state, action: PayloadAction<BillItem>) => {
      const newItem = action.payload;
      // Thêm mục vào giỏ hàng mà không kiểm tra trùng lặp
      state.dataBill.push(newItem);
    },
  },
});

export const { addToBill } = dataBillSlice.actions;

export default dataBillSlice.reducer;
