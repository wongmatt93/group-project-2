import { useContext } from "react";
import WatchListContext from "../context/WatchListContext";
import MovieList from "./MovieList";
import "./WatchList.css";

const WatchList = () => {
  const { watchList } = useContext(WatchListContext);
  return (
    <div className="WatchList">
      <MovieList movies={watchList} />
    </div>
  );
};

export default WatchList;
