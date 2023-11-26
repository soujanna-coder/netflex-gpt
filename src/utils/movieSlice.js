import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularVideo: null,
    topRatedVideo: null,
    upcomingVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularVideo: (state, action) => {
      state.popularVideo = action.payload;
    },
    addTopRatedVideo: (state, action) => {
      state.topRatedVideo = action.payload;
    },
    addUpcomingVideo: (state, action) => {
      state.upcomingVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularVideo,
  addTopRatedVideo,
  addUpcomingVideo,
} = movieSlice.actions;
export default movieSlice.reducer;
