import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import { authApi } from "./authApi";
import usersSlice from "../slice/usersSlice";
import authSlice from "../slice/authSlice";

const store = configureStore({
  reducer: {
    authSlice,
    usersSlice,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, usersApi.middleware),
});

export default store;
