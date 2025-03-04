import {configureStore} from '@reduxjs/toolkit';
import shoppingReducer from './shoppingSlice';
import user from './user';

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    user: user,
  },
});     
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;