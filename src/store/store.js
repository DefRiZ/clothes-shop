import { configureStore } from "@reduxjs/toolkit";
import newCollection from "./slices/newCollection";
import itemsSlice from "./slices/itemsSlice";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    collection: newCollection,
    items: itemsSlice,
    filter: filterSlice,
    cart: cartSlice,
  },
});
