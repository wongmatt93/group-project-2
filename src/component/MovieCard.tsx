import { useContext } from "react";
import { Link } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import Movie from "../models/Movie";
import "./MovieCard.css";

interface Props {
  movie: Movie;
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
      <p>{movie.title}</p>
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
    </li>
  );
};

export default MovieCard;
