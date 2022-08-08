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
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Main />} />
          <Route path="/discover" element={<Main />} />
          <Route path="/:id/overview" element={<MovieOverview />} />
          <Route path="/movies/watchlist" element={<WatchList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
