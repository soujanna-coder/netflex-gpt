import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    show: false,
    gptMovies: null,
    gptMoviesName: null,
  },
  reducers: {
    toggleShow: (state, action) => {
      state.show = !state.show;
    },
    addGptMovieResult: (state, action) => {
      const { gptMovies, gptMoviesName } = action.payload;
      console.log(gptMovies);
      state.gptMovies = gptMovies;
      state.gptMoviesName = gptMoviesName;
    },
  },
});
export const { toggleShow, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
