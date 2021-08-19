import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'selectedTrack',
  initialState: {
    value: null,
  },
  reducers: {
    updateSelectedTrack: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateSelectedTrack } = slice.actions;
export const selectSelectedTrack = (state:any) => state.selectedTrack.value;
export default slice.reducer;
