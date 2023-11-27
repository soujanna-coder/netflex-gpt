import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS as options } from "../utils/constants";
import { addPopularVideo } from "../utils/movieSlice";
const usePopularMovie = () => {
  const isPopularMovies = useSelector((store) => store.movies.popularVideo);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addPopularVideo(json.results));
  };
  useEffect(() => {
    if (!isPopularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovie;
