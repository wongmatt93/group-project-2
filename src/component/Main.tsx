import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import { getPopularMovies } from "../services/TmdbService";
import "./Main.css";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies().then((response) => setMovies(response.results));
  }, []);

  return (
    <div className="Main">
      {movies.map((movie) => (
        <>
          <p>{movie.vote_average}</p>
          <p>{movie.title}</p>
          <p>{movie.poster_path}</p>
          <p>{movie.release_date}</p>
          <p>{movie.genre_id}</p>
          <p>{movie.media_type}</p>
        </>
      ))}
    </div>
  );
};

export default Main;
