import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_URL || "http://localhost:3000" }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    fetchAllUsers: builder.query({
      query: () => '/users',
      providesTags: ['User'],
    }),
    fetchUserById: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
  }),
});

export const {
  useFetchAllUsersQuery,
  useFetchUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;