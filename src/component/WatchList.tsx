import { useContext } from "react";
import WatchListContext from "../context/WatchListContext";
import MovieList from "./MovieList";
import MovieList2 from "./MovieList2";
import "./WatchList.css";

const WatchList = () => {
  const { watchList } = useContext(WatchListContext);
  return (
    <div className="WatchList">
      <h2>Your Watchlist</h2>
      {watchList.length ? (
        <MovieList2 movies={watchList} />
      ) : (
        <p>Your watchlist is empty</p>
      )}
    </div>
  );
};

export default WatchList;
