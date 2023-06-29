import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTweets } from "../Api/Api";

export const getTweetThank = createAsyncThunk("tweets", async (page) => {
  const response = await getTweets(page);
  return response.data;
});
