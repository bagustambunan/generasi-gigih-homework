import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'activeMenu',
  initialState: {
    value: localStorage.getItem('activeMenu')
      ? localStorage.getItem('activeMenu')
      : 'home',
  },
  reducers: {
    setActiveMenu: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('activeMenu', action.payload);
    },
    removeActiveMenu: () => {
      localStorage.removeItem('activeMenu');
    },
  },
});

export const { setActiveMenu, removeActiveMenu } = slice.actions;
export const selectActiveMenu = (state:any) => state.activeMenu.value;
export default slice.reducer;
