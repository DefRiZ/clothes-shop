import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
    totalCount: 0,
  },
  reducers: {
    addItem(state, action) {
      const findItem = state.cart.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.cart.reduce((sum, obj) => {
        return sum + obj.count * obj.price;
      }, 0);
      state.totalCount = state.cart.reduce((sum, obj) => {
        return sum + obj.count;
      }, 0);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((obj) => obj.id === action.payload.id);
      state.totalPrice = state.cart.reduce((sum, obj) => {
        return sum + obj.count * obj.price;
      }, 0);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
