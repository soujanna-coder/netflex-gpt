import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS as options } from "../utils/constants";
import { addTopRatedVideo } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const isTopRatedMovies = useSelector((store) => store.movies.topRatedVideo);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addTopRatedVideo(json.results));
  };
  useEffect(() => {
    if (!isTopRatedMovies) getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
