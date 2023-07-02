import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    categoryId: 0,
    currentPage: 1,
  },
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoryId, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
