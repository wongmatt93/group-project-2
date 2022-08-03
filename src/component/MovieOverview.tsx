import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMovie from "../models/SingleMovie";
import { getMovieById } from "../services/TmdbService";
import "./MovieOverview.css";

const MovieOverview = () => {
  const id = useParams().id;
  const [movie, setMovie] = useState<SingleMovie | null>(null);
  useEffect(() => {
    getMovieById(parseInt(id!)).then((response) => {
      setMovie(response.data);
      console.log(response);
    });
  }, [movie]);
  console.log(movie);
  console.log(id);
  return (
    <div className="MovieOverview">
      {movie ? movie.title : <p>404 Error</p>}
    </div>
  );
};

export default MovieOverview;
