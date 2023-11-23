import React, { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header isSignin={true} />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};
export default Browse;
