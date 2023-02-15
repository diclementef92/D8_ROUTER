import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Movies from "./components/Movies";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav></MyNav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/movies"
            element={<Movies search="harry potter" />}
          ></Route>
          <Route path="/tvshows" element={<Movies search="friends" />}></Route>
          <Route
            path="/movie-details/:movieId"
            element={<MovieDetails />}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>

      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
