import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      action.payload.quizIds = [];
      state.topics[action.payload.id] = action.payload;
    },
    addQuizId: (state, action) => {
      console.log(action.payload);
      state.topics[action.payload.topicId].quizIds.push(action.payload.quizId); 
    }
  }
});

export const { addTopic, addQuizId } = topicsSlice.actions;

export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;