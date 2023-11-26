import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingVideo } from "../utils/movieSlice";
import { API_OPTIONS as options } from "../utils/constants";
const useUpcomingVideo = () => {
  const dispatch = useDispatch();

  const getUpcomingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addUpcomingVideo(json.results));
  };
  useEffect(() => {
    getUpcomingMovie();
  }, []);
};

export default useUpcomingVideo;
