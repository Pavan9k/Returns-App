// store/slices/createUserSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import merge from "lodash.merge";
import axios from "axios";
import { defaultUser } from "../../data/defaultUser";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userInput) => {
    // Merge partial input with defaultUser
    const newUser = merge({}, defaultUser, userInput);

    const response = await axios.post(
      import.meta.env.VITE_APP_BASE_URL,
      newUser
    );
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
