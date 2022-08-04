import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import SingleMovieResponse from "../models/SingleMovieResponse";
import { getMovieById } from "../services/TmdbService";
import "./MovieOverview.css";

const MovieOverview = () => {
  const { isWatchList, addWatchList, removeWatchList } =
    useContext(WatchListContext);
  const id = useParams().id;
  const [movie, setMovie] = useState<SingleMovieResponse | null>(null);
  useEffect(() => {
    getMovieById(parseInt(id!)).then((response) => {
      setMovie(response);
    });
  }, [movie]);
  return (
    <div className="MovieOverview">
      {movie ? (
        <>
          <h2>{`${movie.title} (${parseInt(movie.release_date)})`}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{`${movie.runtime} mins`}</p>
          <p>{movie.genres[0].name}</p>
          <p>{`Rating: ${movie.vote_average.toFixed(1)}/10`}</p>
          <p>{movie.overview}</p>

          {isWatchList(movie.id) ? (
            <i
              className="fa-solid fa-star"
              onClick={() => removeWatchList(movie.id)}
            ></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </>
      ) : (
        <p>404 Error</p>
      )}
    </div>
  );
};

export default MovieOverview;
