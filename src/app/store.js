import { configureStore } from '@reduxjs/toolkit';
import ctrlReducer from '../feature/ctrlSlice';
export default configureStore({
  reducer: {
    ctrls: ctrlReducer,
  },
});
