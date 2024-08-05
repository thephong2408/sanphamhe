import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa giao diện cho mục trong giỏ hàng
interface CartItem {
  name: string;
  price: number;
  // Thêm các thuộc tính khác nếu cần
}

// Định nghĩa giao diện trạng thái
interface DataCartState {
  dataCart: CartItem[]; // Sử dụng loại CartItem cho các mục trong giỏ hàng
}

const initialState: DataCartState = {
  dataCart: [],
};

const dataCartSlice = createSlice({
  name: "dataCart",
  initialState,
  reducers: {
    // Định nghĩa hành động để thêm dữ liệu vào giỏ hàng
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // Thêm mục mới vào mảng hiện tại
      state.dataCart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      // Xóa mục khỏi mảng dựa trên tên của mục
      state.dataCart = state.dataCart.filter(
        (item) => item.name !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = dataCartSlice.actions;

export default dataCartSlice.reducer;
