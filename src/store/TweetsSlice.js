import { createSlice } from "@reduxjs/toolkit";
import { getTweetThank } from "./TweetsThank";
const handleTweetsGetPending = (state) => {
  state.error = "";
};
const handleTweetsGetFulfilled = (state, { payload }) => {
  state.users = [...state.users, ...payload];
  state.error = "";
};
const handleTweetsRejected = (state, { error }) => {
  state.error = error.message;
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    users: [],
    error: "",
    page: 1,
    hidden: false,
    isActive: false,
    filter: "all",
  },
  reducers: {
    counterPage: (state) => {
      state.page = state.page + 1;
      state.isActive = false;
    },
    visibility: (state) => {
      state.hidden = true;
    },
    active: (state) => {
      state.isActive = true;
    },
    follow: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user.id === payload
          ? { ...user, follow: true, followers: Number(user.followers) + 1 }
          : { ...user }
      );
    },
    following: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user.id === payload
          ? { ...user, follow: false, followers: Number(user.followers) - 1 }
          : { ...user }
      );
    },
    filter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTweetThank.pending, handleTweetsGetPending)
      .addCase(getTweetThank.fulfilled, handleTweetsGetFulfilled)
      .addCase(getTweetThank.rejected, handleTweetsRejected);
  },
});

export const tweetsReducer = tweetsSlice.reducer;

export const { actions } = tweetsSlice;
