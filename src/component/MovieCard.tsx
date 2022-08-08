import { useContext } from "react";
import { Link } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import Movie from "../models/Movie";
import SingleMovieResponse from "../models/SingleMovieResponse";
import "./MovieCard.css";

interface Props {
  movie: Movie | SingleMovieResponse;
}

const MovieCard = ({ movie }: Props) => {
  const { addWatchList, removeWatchList, isWatchList } =
    useContext(WatchListContext);
  return (
    <li className="MovieCard">
      <Link to={`/${encodeURIComponent(movie.id)}/overview`}>
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>

      {isWatchList(movie.id) ? (
        <i
          className="fa-solid fa-star"
          onClick={() => removeWatchList(movie.id)}
        ></i>
      ) : (
        <i
          className="fa-regular fa-star"
          onClick={() => addWatchList(movie)}
        ></i>
      )}
      <p className="cardtitle">{movie.title}</p>
    </li>
  );
};

export default MovieCard;
