import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const isTrailerExit = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const trailer = await json.results.filter((data) => {
      if (data.type === "Trailer") {
        return data;
      }
    });

    dispatch(addTrailerVideo(trailer[0]));
  };
  useEffect(() => {
    if (!isTrailerExit) getMovieVideos();
  }, []);
};
export default useMovieTrailer;
