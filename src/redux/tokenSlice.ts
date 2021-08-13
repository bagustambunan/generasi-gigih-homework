import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "token",
  initialState: {
    value: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("token", action.payload);
    },
    removeToken: (state, action) => {
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, removeToken } = slice.actions;
export const selectToken = (state:any) => state.token.value;
export default slice.reducer;
