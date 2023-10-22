import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async ({ category, currentPage }) => {
    const { data } = await axios.get(
      `https://63f6626c59c944921f73435d.mockapi.io/items?${category}&page=${currentPage}&limit=3`
    );

    return data;
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    itemsFetch: [],
    status: "loading",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.status = "complete";
      state.itemsFetch = action.payload;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default itemsSlice.reducer;
