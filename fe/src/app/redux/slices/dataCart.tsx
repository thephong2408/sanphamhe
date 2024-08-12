import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa giao diện cho mục trong giỏ hàng
interface CartItem {
  name: string;
  price: number;
  id: number;
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
      const newItem = action.payload;
      // Kiểm tra xem mục đã tồn tại chưa dựa trên id
      const existingItem = state.dataCart.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.dataCart.push(newItem);
      } else {
        // Có thể thêm logic để cập nhật mục nếu cần
        // Ví dụ: nếu bạn muốn cập nhật giá hoặc số lượng của mục đã tồn tại
        // existingItem.price = newItem.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      // Xóa mục khỏi mảng dựa trên id của mục
      state.dataCart = state.dataCart.filter(
        (item) => item.id !== action.payload
      );
    },
    // Hành động để xóa toàn bộ giỏ hàng
    clearCart: (state) => {
      state.dataCart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = dataCartSlice.actions;

export default dataCartSlice.reducer;
