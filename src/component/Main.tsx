//conditionally make an object - dont have empty query strings/filters added into the URL

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Movie from "../models/Movie";
import {
  getMoviesByDiscover,
  getMoviesBySearchTerm,
  getPopularMovies,
} from "../services/TmdbService";
import CriteriaForm from "./CriteriaForm";
import "./Main.css";
import MovieList from "./MovieList";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  const genres = searchParams.get("with_genres");
  const year = searchParams.get("primary_release_year");

  useEffect(() => {
    if (searchTerm) {
      getMoviesBySearchTerm(searchTerm).then((response) =>
        setMovies(response.results)
      );
    } else if (genres || year) {
      getMoviesByDiscover(genres, year).then((response) =>
        setMovies(response.results)
      );
    } else {
      getPopularMovies().then((response) => setMovies(response.results));
    }
  }, [searchTerm, genres, year]);

  return (
    <div className="Main">
      <CriteriaForm />
      {searchTerm || genres || year ? (
        <h2>Search Results</h2>
      ) : (
        <h2>Trending Movies</h2>
      )}
      <MovieList movies={movies} />
    </div>
  );
};

export default Main;
