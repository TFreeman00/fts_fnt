import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import { authApi } from "./authApi";
import usersSlice from "../slice/usersSlice";
import authSlice from "../slice/authSlice";
import { postsApi } from "./postsApi";
import postsSlice from "../slice/postSlice";

const store = configureStore({
  reducer: {
    authSlice,
    usersSlice,
    postsSlice,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      usersApi.middleware,
      postsApi.middleware
    ),
});

export default store;
