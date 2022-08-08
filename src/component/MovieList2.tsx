import "./MovieList2.css";
import Movie from "../models/Movie";
import SingleMovieResponse from "../models/SingleMovieResponse";
import MovieCard from "./MovieCard";

interface Props {
  movies: (Movie | SingleMovieResponse)[];
}
const MovieList2 = ({ movies }: Props) => {
  return (
    <div className="MovieList2">
      <ul>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={`${movie.id}`} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList2;
