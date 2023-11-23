import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import React, { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const gotNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    gotNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
