import axios from "axios";
import TmdbResponse from "../models/TmdbResponse";

const key: string = process.env.REACT_APP_API_KEY || "";

const getPopularMovies = (): Promise<TmdbResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/movie/popular", {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

export { getPopularMovies };
