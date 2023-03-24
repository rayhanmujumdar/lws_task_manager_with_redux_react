import { configureStore } from "@reduxjs/toolkit";
import {apiSlice} from "../feature/api/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(apiSlice.middleware) 
});

export default store;
