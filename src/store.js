import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./slices/bucketSlice";
import toggleSlice from "./slices/toggleSlice.js";
import historySlice from "./slices/historySlice";

const store = configureStore({
  reducer: {
    buckets: bucketSlice,
    toggle: toggleSlice,
    history: historySlice,
  },
});

export default store;
