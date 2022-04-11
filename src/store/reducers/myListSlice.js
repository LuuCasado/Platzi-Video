import { createSlice } from "@reduxjs/toolkit";

export const myListSlice = createSlice({
  name: "myList",
  initialState: {
    data: [],
  },
  reducers: {
    addVideo: (state, { payload }) => {
      state.data.push(payload);
    },

    deleteVideo: (state, { payload: { title: deletedTitle } }) => {
      state.data = state.data.filter(({ title }) => deletedTitle !== title);
    },
  },
});

export const { addVideo, deleteVideo } = myListSlice.actions;

export default myListSlice.reducer;
