import { generateKeySync } from "crypto";
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
          <div className="wtf5">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt={movie.title}
            />

            <div>
              <div className="wtf2">
                <div>
                  <div className="wtf3">Length:</div>
                  <p>{`${movie.runtime} mins`}</p>
                </div>
                <div>
                  <>
                    {" "}
                    <div className="wtf3">Genre:</div>
                    <div className="wtf6">
                      {movie.genres.map((genre, index) => {
                        return (
                          <p key={genre.id}>
                            {genre.name}
                            {index < movie.genres.length - 1 ? ", " : ""}
                          </p>
                        );
                      })}
                    </div>
                  </>
                </div>
                <div>
                  <div className="wtf3">Rating:</div>
                  <p>{`${movie.vote_average.toFixed(1)}/10`}</p>
                </div>
              </div>
              <p>{movie.overview}</p>

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
            </div>
          </div>
        </>
      ) : (
        <p>404 Error</p>
      )}
    </div>
  );
};

export default MovieOverview;
