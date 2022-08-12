import axios from "axios";
import GenreResponse from "../models/GenreResponse";
import SingleMovieResponse from "../models/SingleMovieResponse";
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

const getTrendingMovies = (): Promise<TmdbResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/trending/movie/day", {
      params: { api_key: key },
    })
    .then((response) => response.data);
};

const getUpcomingMovies = (): Promise<TmdbResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/movie/upcoming", {
      params: { api_key: key },
    })
    .then((response) => response.data);
};

const getMoviesBySearchTerm = (searchTerm: string): Promise<TmdbResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/search/movie", {
      params: { api_key: key, query: searchTerm },
    })
    .then((response) => {
      return response.data;
    });
};
const getMoviesByDiscover = (
  genres: string | null,
  year: string | null,
  votes: string | null
): Promise<TmdbResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: key,
        with_genres: genres,
        primary_release_year: year,
        "vote_average.gte": votes,
      },
    })
    .then((response) => {
      return response.data;
    });
};
const getMovieById = (id: number): Promise<SingleMovieResponse> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

const getGenres = (): Promise<GenreResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/genre/movie/list", {
      params: { api_key: key },
    })
    .then((response) => response.data);
};

export {
  getPopularMovies,
  getTrendingMovies,
  getUpcomingMovies,
  getMoviesBySearchTerm,
  getMoviesByDiscover,
  getMovieById,
  getGenres,
};
