import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    categoryId: 0,
    currentPage: 1,
    isOpenDrawer: false,
    isOpenBurger: false,
  },
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setDrawer(state) {
      state.isOpenDrawer = !state.isOpenDrawer;
    },
    setBurger(state) {
      state.isOpenBurger = !state.isOpenBurger;
    },
  },
});

export const { setCategoryId, setCurrentPage, setDrawer, setBurger } =
  filterSlice.actions;

export default filterSlice.reducer;
