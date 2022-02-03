import { createSlice } from "@reduxjs/toolkit";

export const trendsSlice = createSlice({
  name: "trends",
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

export const { addVideo, deleteVideo } = trendsSlice.actions;

export default trendsSlice.reducer;
