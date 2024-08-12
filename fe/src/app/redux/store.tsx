// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { PersistConfig, persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage
import dataSearchReducer from "./slices/dataSearch";
import dataCardReducer from "./slices/dataCard";
import dataCartReducer from "./slices/dataCart";
import dataBillReducer from "./slices/dataBill";
import dataDispartReducer from "./slices/dataDispart";
import paginationDataReducer from "./slices/paginationData";

// Kết hợp các reducers thành một rootReducer
const rootReducer = combineReducers({
  dataSearch: dataSearchReducer,
  dataCard: dataCardReducer,
  dataCart: dataCartReducer,
  dataBill: dataBillReducer,
  dataDispart: dataDispartReducer,
  paginationData: paginationDataReducer,
});

// Cấu hình Redux Persist
const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  // whitelist hoặc blacklist nếu cần
};

// Tạo persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Cấu hình store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Tạo persistor
export const persistor = persistStore(store);

// Định nghĩa kiểu RootState
export type RootState = ReturnType<typeof rootReducer>;
