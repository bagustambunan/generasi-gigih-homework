import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';
import userReducer from './userSlice';
import queryReducer from './querySlice';
import selectedTrackReducer from './selectedTrackSlice';
import activeMenuReducer from './activeMenuSlice';

export default configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
    query: queryReducer,
    selectedTrack: selectedTrackReducer,
    activeMenu: activeMenuReducer,
  },
});
