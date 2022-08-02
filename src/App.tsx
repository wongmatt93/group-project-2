import "./App.css";
import Main from "./component/Main";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./component/Header";
import WatchList from "./component/WatchList";
import MovieOverview from "./component/MovieOverview";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Main />} />
          <Route path="/:id/overview" element={<MovieOverview />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
