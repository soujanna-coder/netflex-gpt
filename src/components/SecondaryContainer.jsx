import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux/es/hooks/useSelector";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => {
    return store.movies.nowPlayingMovies;
  });
  if (!nowPlayingMovies) return;
  return (
    <div className="bg-black">
      <div className=" -mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Trending"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={nowPlayingMovies} />
        <MovieList title={"Trending"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
