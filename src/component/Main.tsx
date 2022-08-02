import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Movie from "../models/Movie";
import {
  getMoviesBySearchTerm,
  getPopularMovies,
} from "../services/TmdbService";
import "./Main.css";
import MovieList from "./MovieList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");

  useEffect(() => {
    if (searchTerm) {
      getMoviesBySearchTerm(searchTerm).then((response) =>
        setMovies(response.results)
      );
    } else {
      getPopularMovies().then((response) => setMovies(response.results));
    }
  }, [searchTerm]);

  return (
    <div className="Main">
      <SearchForm />
      <MovieList movies={movies} />
    </div>
  );
};

export default Main;
