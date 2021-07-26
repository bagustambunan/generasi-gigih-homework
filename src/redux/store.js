import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';
import userReducer from './userSlice';
import queryReducer from './querySlice';
import selectedTrackReducer from './selectedTrackSlice';

export default configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
    query: queryReducer,
    selectedTrack: selectedTrackReducer,
  },
});