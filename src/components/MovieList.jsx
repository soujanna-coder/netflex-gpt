import React from "react";
import MovieCard from "./MovieCard";
import { IMAGE_URL } from "../utils/constants";
const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="px-6 ">
        <h1 className="text-lg md:text-3xl py-2 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies.map((movie) => {
              return (
                <MovieCard posterPath={movie.poster_path} key={movie.id} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
