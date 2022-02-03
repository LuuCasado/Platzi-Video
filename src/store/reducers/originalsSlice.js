import { createSlice } from "@reduxjs/toolkit";

export const originalsSlice = createSlice({
  name: "originals",
  initialState: {
    data: [],
  },
  reducers: {
    addVideo: (state, { payload }) => {
      state.data.push(payload);
    },
    deleteVideo: (state, { payload }) => {
      //state.data = state.data.filter();
    },
  },
});

export const { addVideo, deleteVideo } = originalsSlice.actions;

export default originalsSlice.reducer;
