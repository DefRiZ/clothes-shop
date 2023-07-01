import { configureStore } from "@reduxjs/toolkit";
import newCollection from "./slices/newCollection";

export const store = configureStore({
  reducer: { collection: newCollection },
});
