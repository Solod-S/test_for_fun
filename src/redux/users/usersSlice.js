import { createSlice } from "@reduxjs/toolkit";
import * as usersOperation from "../users/usersOperation";

const initialState = { data: [], isRefreshing: false };

const UserSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(usersOperation.fetchUsers.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(usersOperation.fetchUsers.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isRefreshing = false;
      })
      .addDefaultCase((state) => {
        state.isRefreshing = false;
      }),
});

export default UserSlice.reducer;
