import { configureStore } from "@reduxjs/toolkit";
import { topicsSlice } from '../features/topics/topicsSlice.js'

export default configureStore({
  reducer: {topics: topicsSlice.reducer},
});
