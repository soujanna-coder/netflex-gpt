import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux/es/hooks/useSelector";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => {
    return store.movies.nowPlayingMovies;
  });
  const popularMovies = useSelector((store) => {
    return store.movies.popularVideo;
  });
  const topRatedMovies = useSelector((store) => {
    return store.movies.topRatedVideo;
  });
  const upcomingMovies = useSelector((store) => {
    return store.movies.upcomingVideo;
  });
  if (!nowPlayingMovies) return;
  if (!popularMovies) return;
  if (!topRatedMovies) return;
  if (!upcomingMovies) return;
  return (
    <div className="bg-black">
      <div className=" -mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
