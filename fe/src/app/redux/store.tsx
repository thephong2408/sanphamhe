// store.ts
import { configureStore } from "@reduxjs/toolkit";
import dataSearchReducer from "./slices/dataSearch";
import dataCardReducer from "./slices/dataCard";
import dataCartReducer from "./slices/dataCart";
import dataBillReducer from "./slices/dataBill";
import dataDispartReducer from "./slices/dataDispart";

export const store = configureStore({
  reducer: {
    dataSearch: dataSearchReducer,
    dataCard: dataCardReducer,
    dataCart: dataCartReducer,
    dataBill: dataBillReducer,
    dataDispart: dataDispartReducer,
  },
});

// Định nghĩa kiểu RootState
export type RootState = ReturnType<typeof store.getState>;
