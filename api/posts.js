import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:3000",
  }),

  // post, delete, patch uses mutation
  endpoints: (builder) => ({
    getPosts: builder.query({
      // get all posts
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),

    createPost: builder.mutation({
      // create post
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body: body,
      }),
    }),

    deletePost: builder.mutation({
      // delete post
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),

    updatePost: builder.mutation({
      // update post
      query: ({ id, body }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postsApi;
