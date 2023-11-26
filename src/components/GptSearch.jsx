import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import netflexBackgroundImage from "../assets/image/netflex.jpg";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute h-full	-z-30">
        <img
          className="w-screen h-screen"
          src={netflexBackgroundImage}
          alt="BackGroundImage"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
      <h1 className="text-white font-bold">{"Gpt Search"}</h1>
    </div>
  );
};
export default GptSearch;
