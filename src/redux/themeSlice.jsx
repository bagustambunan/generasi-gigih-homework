import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "theme",
  initialState: {
    value: true,
  },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTheme } = slice.actions;
export const selectTheme = (state) => state.theme.value;
export default slice.reducer;
