import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const { gptMovies, gptMoviesName } = useSelector((store) => store.gpt);
  if (!gptMoviesName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {gptMoviesName.map((movieName, index) => (
        <MovieList title={movieName} movies={gptMovies[index]} />
      ))}
    </div>
  );
};
export default GptMovieSuggestions;
