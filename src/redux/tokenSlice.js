import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'token',
  initialState: {
    value: null,
  },
  reducers: {
    updateToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateToken } = slice.actions;
export const selectToken = state => state.token.value;
export default slice.reducer;