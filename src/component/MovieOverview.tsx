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
          <div className="overview">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt={movie.title}
            />

            <div>
              <h2>{`${movie.title} (${parseInt(movie.release_date)})`}</h2>
              <div className="label-container">
                <div>
                  <div className="labeling">Length:</div>
                  <p>{`${movie.runtime} mins`}</p>
                </div>
                <div>
                  <>
                    {" "}
                    <div className="labeling">Genre:</div>
                    <div className="genre">
                      {movie.genres.map((genre, index) => {
                        return (
                          <p key={genre.id}>
                            {genre.name}
                            {index < movie.genres.length - 1 ? ", " + "  " : ""}
                          </p>
                        );
                      })}
                    </div>
                  </>
                </div>
                <div>
                  <div className="labeling">Rating:</div>
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
