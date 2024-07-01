import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userDetails) => ({
        url: '/register',
        method: 'POST',
        body: userDetails,
      }),
    }),
    fetchUserProfile: builder.query({
      query: (userId) => `/profile/${userId}`,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useFetchUserProfileQuery } = authApi;
