import { createSlice } from "@reduxjs/toolkit";

export const addQuizForTopicId = (newQuiz) => {
  return (dispatch) => {
    dispatch({type: 'quizzes/addQuiz', payload: newQuiz});
    dispatch({type: 'topics/addQuizId', payload: {
      quizId: newQuiz.id,
      topicId: newQuiz.topicId
    }});
  };
}

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;