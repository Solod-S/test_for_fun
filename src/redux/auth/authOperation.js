import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "../../service/API/authAPI";

export const logIn = createAsyncThunk("auth/", async (_, thunkAPI) => {
  try {
    const data = await authAPI.logIn();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
