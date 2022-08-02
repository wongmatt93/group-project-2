import { ReactNode, useState } from "react";
import Movie from "../models/Movie";
import WatchListContext from "./WatchListContext";

interface Props {
  children: ReactNode;
}

const WatchListContextProvider = ({ children }: Props) => {
  const [watchList, setWatchList] = useState<Movie[]>([]);
  const addWatchList = (movie: Movie): void => {
    setWatchList((prev) => [...prev, movie]);
  };
  const removeWatchList = (id: number): void => {
    setWatchList((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };
  const isWatchList = (id: number): boolean =>
    watchList.some((movie) => movie.id === id);

  return (
    <WatchListContext.Provider
      value={{ watchList, addWatchList, removeWatchList, isWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
