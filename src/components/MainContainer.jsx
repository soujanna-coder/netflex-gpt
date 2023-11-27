import React from "react";
import { useSelector } from "react-redux";
import VideoTittle from "./VideoTittle";
import VideoBackGround from "./VideoBackGround";
const MainContainer = () => {
  const movies = useSelector((store) => {
    return store.movies?.nowPlayingMovies;
  });
  if (movies === null) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = movies[0];

  return (
    <div
      className="pt-[30%] bg-black
     md:pt-0"
    >
      <VideoTittle tittle={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
