import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    getUser: (state) => {
      return state.user;
    },
  },
});

export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
