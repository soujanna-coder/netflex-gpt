import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingVideo from "../hooks/useUpcomingVideo";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovie();
  useUpcomingVideo();
  const toggleView = useSelector((store) => {
    return store.gpt.show;
  });

  return (
    <div>
      <Header isSignin={true} />
      {toggleView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
