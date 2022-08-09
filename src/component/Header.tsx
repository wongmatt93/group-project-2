import { Link } from "react-router-dom";
import "./Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <div className="Header">
      <div className="test">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>
            <img className="desktopimg" src="/our-logo.png" alt="BetterIMDb" />
            <img
              className="mobileimg"
              src="/mobile-logo.png"
              alt="BetterIMDb"
            />
          </h1>
        </Link>
        <SearchForm />
      </div>
      <Link
        to="/movies/watchlist"
        style={{ textDecoration: "none" }}
        className="watchlist"
      >
        Watchlist
      </Link>
    </div>
  );
};

export default Header;
