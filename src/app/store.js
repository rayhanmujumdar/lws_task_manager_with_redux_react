import { configureStore } from "@reduxjs/toolkit";
import {apiSlice} from "../feature/api/apiSlice";
import filterReducer from "../feature/filter/filterSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(apiSlice.middleware) 
});

export default store;
