import { createSlice } from "@reduxjs/toolkit";
import * as authOperation from "../auth/authOperation";

const initialState = { user: {}, isRefreshing: false };

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(authOperation.logIn.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(authOperation.logIn.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isRefreshing = false;
      })
      .addDefaultCase((state) => {
        state.isRefreshing = false;
      }),
});

export default AuthSlice.reducer;
