import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "theme",
  initialState: {
    value: "light",
  },
  reducers: {
    updateTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateTheme } = slice.actions;
export const selectTheme = (state) => state.theme.value;
export default slice.reducer;
