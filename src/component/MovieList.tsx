import Movie from "../models/Movie";
import SingleMovieResponse from "../models/SingleMovieResponse";
import MovieCard from "./MovieCard";
import "./MovieList.css";

interface Props {
  movies: (Movie | SingleMovieResponse)[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <div className="MovieList">
      <ul>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={`${movie.id}`} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
