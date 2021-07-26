import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';
import userReducer from './userSlice'

export default configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
});