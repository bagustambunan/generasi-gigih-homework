import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateUser } = slice.actions;
export const selectUser = state => state.user.value;
export default slice.reducer;