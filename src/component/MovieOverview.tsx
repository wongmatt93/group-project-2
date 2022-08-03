import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMovieResponse from "../models/SingleMovieResponse";
import { getMovieById } from "../services/TmdbService";
import "./MovieOverview.css";

const MovieOverview = () => {
  const id = useParams().id;
  const [movie, setMovie] = useState<SingleMovieResponse | null>(null);
  useEffect(() => {
    getMovieById(parseInt(id!)).then((response) => {
      setMovie(response);
    });
  }, [movie]);
  return (
    <div className="MovieOverview">
      {movie ? movie.title : <p>404 Error</p>}
    </div>
  );
};

export default MovieOverview;
