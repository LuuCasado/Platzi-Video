import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: { playingVideo: null },
  reducers: {
    setVideoSource: (state, { payload }) => {
      state.playingVideo = payload;
    },
  },
});

export const { setVideoSource } = playerSlice.actions;

export default playerSlice.reducer;
