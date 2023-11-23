import React from "react";
import { IMAGE_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  console.log("posterPath" + posterPath);
  return (
    <div className="w-48 pr-4">
      <img alt="movie card" src={IMAGE_URL + posterPath} />
    </div>
  );
};

export default MovieCard;