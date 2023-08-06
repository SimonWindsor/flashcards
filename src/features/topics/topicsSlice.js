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
    }
  }
});

export const { addTopic } = topicsSlice.actions;

export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;