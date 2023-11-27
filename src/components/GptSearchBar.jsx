import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { openai } from "../utils/openai";
import { useRef } from "react";
import { API_OPTIONS as options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.language);
  console.log(langKey);
  const gptSearch = useRef(null);
  const handleGptClick = () => {
    console.log(gptSearch.current.value);
    GptResult(gptSearch.current.value);
  };
  const gptSingleSearchMovies = async (moviesNames) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${moviesNames}&include_adult=false&language=en-US&page=1`,
      options
    );
    const json = await data.json();
    return json.results;
  };
  async function GptResult(contentText) {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      contentText +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion?.choices[0]?.message?.content);
    const gptMovies = chatCompletion?.choices[0]?.message?.content.split(",");
    const data = await gptMovies.map((data) => gptSingleSearchMovies(data));
    const promiseResolve = await Promise.all(data);
    dispatch(
      addGptMovieResult({ gptMovies: promiseResolve, gptMoviesName: gptMovies })
    );
  }
  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={gptSearch}
        />
        <button
          className=" col-span-3 m-4 py-2 px-4 bg-red-800 text-white rounded-lg"
          onClick={handleGptClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
