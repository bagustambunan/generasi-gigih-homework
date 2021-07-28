import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    // value: localStorage.getItem('user') ? localStorage.getItem('user') : null,
    value: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
      // localStorage.setItem('user', action.payload);
    },
    removeUser: (state, action) => {
      // localStorage.removeItem('user');
    },
  },
});

export const { setUser, removeUser } = slice.actions;
export const selectUser = state => state.user.value;
export default slice.reducer;