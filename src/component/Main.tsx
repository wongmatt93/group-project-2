//conditionally make an object - dont have empty query strings/filters added into the URL

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Movie from "../models/Movie";
import {
  getMoviesByDiscover,
  getMoviesBySearchTerm,
  getPopularMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../services/TmdbService";
import CriteriaForm from "./CriteriaForm";
import "./Main.css";
import MovieList from "./MovieList";
import MovieList2 from "./MovieList2";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trendMovies, setTrendMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  const genres = searchParams.get("with_genres");
  const year = searchParams.get("primary_release_year");
  const votes = searchParams.get("vote_average.gte");

  useEffect(() => {
    if (searchTerm) {
      getMoviesBySearchTerm(searchTerm).then((response) =>
        setMovies(response.results)
      );
    } else if (genres || year || votes) {
      getMoviesByDiscover(genres, year, votes).then((response) =>
        setMovies(response.results)
      );
    } else {
      getPopularMovies().then((response) => setMovies(response.results));
      getTrendingMovies().then((response) => setTrendMovies(response.results));
      getUpcomingMovies().then((response) =>
        setUpcomingMovies(response.results)
      );
    }
  }, [searchTerm, genres, year, votes]);

  return (
    <div className="Main">
      <CriteriaForm />
      {searchTerm || genres || year || votes ? (
        <>
          <h2>Search Results</h2>
          <MovieList2 movies={movies} />
        </>
      ) : (
        <>
          {" "}
          <h2>Trending Movies</h2>
          <MovieList movies={trendMovies} />
          <h2>Popular Movies</h2>
          <MovieList movies={movies} />
          <h2>Upcoming Movies</h2>
          <MovieList movies={upcomingMovies} />
        </>
      )}
    </div>
  );
};

export default Main;
