import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    removeUser: (state, action) => {},
  },
});

export const { setUser, removeUser } = slice.actions;
export const selectUser = (state:any) => state.user.value;
export default slice.reducer;
