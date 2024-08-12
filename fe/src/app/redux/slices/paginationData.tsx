import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for laptop data
interface Laptop {
  id: number;
  name: string;
}

// Define a type for the pagination data state
interface DataPaginationData {
  dataPaginationData: Laptop[];
}

const initialState: DataPaginationData = {
  dataPaginationData: [],
};

const paginationDataSlice = createSlice({
  name: "dataPaginationData",
  initialState,
  reducers: {
    setPaginationData: (state, action: PayloadAction<Laptop[]>) => {
      state.dataPaginationData = action.payload;
    },
  },
});

export const { setPaginationData } = paginationDataSlice.actions;

export default paginationDataSlice.reducer;
