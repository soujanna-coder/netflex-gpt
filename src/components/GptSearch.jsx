import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import netflexBackgroundImage from "../assets/image/netflex.jpg";
const GptSearch = () => {
  return (
    <div>
      <div className="fixed h-full	-z-30">
        <img
          className="w-screen h-screen"
          src={netflexBackgroundImage}
          alt="BackGroundImage"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};
export default GptSearch;
