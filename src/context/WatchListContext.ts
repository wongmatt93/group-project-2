import { createContext } from "react";
import Movie from "../models/Movie";

interface WatchListContextModel {
  watchList: Movie[];
  addWatchList: (movie: Movie) => void;
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
