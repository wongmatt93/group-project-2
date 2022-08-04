import { createContext } from "react";
import Movie from "../models/Movie";
import SingleMovieResponse from "../models/SingleMovieResponse";

interface WatchListContextModel {
  watchList: (Movie | SingleMovieResponse)[];
  addWatchList: (movie: Movie | SingleMovieResponse) => void;
  removeWatchList: (id: number) => void;
  isWatchList: (id: number) => boolean;
}

const defaultValues: WatchListContextModel = {
  watchList: [],
  addWatchList: () => {},
  removeWatchList: () => {},
  isWatchList: () => false,
};

const WatchListContext = createContext(defaultValues);

export default WatchListContext;
