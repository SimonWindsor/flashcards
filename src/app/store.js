import { configureStore } from "@reduxjs/toolkit";
import { topicsSlice } from '../features/topics/topicsSlice.js';
import { quizzesSlice } from '../features/quizzes/quizzesSlice.js';

export default configureStore({
  reducer: {
    topics: topicsSlice.reducer,
    quizzes: quizzesSlice.reducer
  },
});
