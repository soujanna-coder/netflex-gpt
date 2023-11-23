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
    <>
      <VideoTittle tittle={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </>
  );
};

export default MainContainer;
