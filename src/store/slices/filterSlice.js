import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    categoryId: 0,
  },
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
