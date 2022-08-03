import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>BetterIMDb</h1>
      </Link>
      <Link to="/movies/watchlist">Watchlist</Link>
    </div>
  );
};

export default Header;
