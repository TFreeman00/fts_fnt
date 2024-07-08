import { postsApi } from "fts_fnt/api/posts";
import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "postsSlice",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, { payload }) => {
        state.posts = payload;
      }
    );
    builder.addMatcher(
      postsApi.endpoints.createPost.matchFulfilled,
      (state, { payload }) => {
        state.posts.push(payload);
      }
    );
    builder.addMatcher(
      postsApi.endpoints.deletePost.matchFulfilled,
      (state, { meta }) => {
        state.posts = state.posts.filter((post) => post.id !== meta.arg);
      }
    );
    builder.addMatcher(
      postsApi.endpoints.updatePost.matchFulfilled,
      (state, { payload }) => {
        state.posts = state.posts.map((post) =>
          post.id === payload.id ? payload : post
        );
      }
    );
  },
});

export default postsSlice.reducer;