import { createAsyncThunk } from "@reduxjs/toolkit";
import * as usersAPI from "../../service/API/usersAPI";

export const fetchUsers = createAsyncThunk("users/", async (_, thunkAPI) => {
  try {
    const data = await usersAPI.fetchUsers();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateFollower = createAsyncThunk(
  "users/id",
  async (user, thunkAPI) => {
    try {
      const data = await usersAPI.updateFollower(user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
