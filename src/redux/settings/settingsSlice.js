import { createSlice } from "@reduxjs/toolkit";
import * as usersOperation from "../users/usersOperation";

const initialState = { userslimit: 3, page: 1 };

const SettingsSlice = createSlice({
  name: "settings",
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
      .addCase(usersOperation.updateFollower.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(
        usersOperation.updateFollower.fulfilled,
        (state, { payload }) => {
          console.log(`payload`, payload);
          let index = state.data.findIndex((user) => user.id === payload.id);
          if (index !== -1) {
            state.data[index] = payload;
          }
          state.isRefreshing = false;
        }
      )
      .addDefaultCase((state) => {
        state.isRefreshing = false;
      }),
});

export default SettingsSlice.reducer;
