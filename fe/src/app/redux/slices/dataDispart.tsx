import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface DataDispartState {
  dataDispart: any[]; // Change this to the correct type if possible
  dataUsername: string;
  dataId: string;
  dataCartAPI: any[];
  dataListCart: any[];
  dataListUser: any[];
}

const initialState: DataDispartState = {
  dataDispart: [],
  dataUsername: "",
  dataId: "",
  dataCartAPI: [],
  dataListCart: [],
  dataListUser: [],
};

const dataDispartSlice = createSlice({
  name: "dataDispart",
  initialState,
  reducers: {
    setDataDispart: (state, action: PayloadAction<any[]>) => {
      state.dataDispart = action.payload;
    },
    setDataUsername: (state, action: PayloadAction<string>) => {
      state.dataUsername = action.payload;
    },
    clearDataUsername: (state) => {
      state.dataUsername = ""; // Clear dataUsername
    },
    setDataId: (state, action: PayloadAction<string>) => {
      state.dataId = action.payload;
    },
    clearDataId: (state) => {
      state.dataId = ""; // Clear dataId
    },
    setDataCartAPI: (state, action: PayloadAction<any[]>) => {
      state.dataCartAPI = action.payload;
    },
    setDataListCart: (state, action: PayloadAction<any[]>) => {
      state.dataListCart = action.payload;
    },
    setListUser: (state, action: PayloadAction<any[]>) => {
      state.dataListUser = action.payload;
    },
    clearListUser: (state) => {
      state.dataListUser = [];
    },
  },
});

export const {
  setDataDispart,
  setDataUsername,
  clearDataUsername,
  setDataId,
  clearDataId,
  setDataCartAPI,
  setDataListCart,
  setListUser,
  clearListUser,
} = dataDispartSlice.actions;

export default dataDispartSlice.reducer;
