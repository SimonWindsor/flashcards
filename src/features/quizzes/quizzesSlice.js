import { createSlice } from '@reduxjs/tookit';

export const addQuizForTopicId = (payload) => {
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(paylaod));
    dispatch({type: 'topics/addQuizId', payload: payload});
  };
}

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.quizId] = action.payload;
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;