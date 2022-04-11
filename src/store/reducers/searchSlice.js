import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    term: "",
  },
  reducers: {
    setSearchVideo: (state, { payload: { term, results } }) => {
      state.results = results;
      state.term = term;
    },
  },
});

export const { setSearchVideo } = searchSlice.actions;

export default searchSlice.reducer;
