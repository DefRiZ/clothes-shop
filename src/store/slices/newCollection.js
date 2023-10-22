import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchCollection = createAsyncThunk(
  "collection/fetchcollection",
  async () => {
    const { data } = await axios.get(
      "https://63f6626c59c944921f73435d.mockapi.io/collection"
    );
    return data;
  }
);

const newCollectionSlice = createSlice({
  name: "collection",
  initialState: {
    collectionFetch: [],
    status: "loading", // "loading", "complete", "error"
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollection.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCollection.fulfilled, (state, action) => {
      state.status = "complete";
      state.collectionFetch = action.payload;
    });
    builder.addCase(fetchCollection.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default newCollectionSlice.reducer;
