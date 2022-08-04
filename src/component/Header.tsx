import { Link } from "react-router-dom";
import "./Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <div className="Header">
      <div className="test">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>BetterIMDb</h1>
        </Link>
        <SearchForm />
      </div>
      <Link
        to="/movies/watchlist"
        style={{ textDecoration: "none" }}
        className="wtf"
      >
        Watchlist
      </Link>
    </div>
  );
};

export default Header;
