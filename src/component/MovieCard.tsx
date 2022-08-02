import Movie from "../models/Movie";
import "./MovieCard.css";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <li className="MovieCard">
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
        alt={movie.title}
      />
    </li>
  );
};

export default MovieCard;
