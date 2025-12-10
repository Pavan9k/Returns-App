// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import createUserReducer from "./slices/createUserSlice";

const store = configureStore({
  reducer: {
    users: createUserReducer, // matches slice name
  },
});

export default store;
