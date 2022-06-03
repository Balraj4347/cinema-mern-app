import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import MoviesList from "../pages/MoviesList";
import MoviesInsert from "../pages/MoviesInsert";
import MoviesUpdate from "../pages/MoviesUpdate";
import Home from "../pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/movies/list' exact element={<MoviesList />} />
        <Route path='/movies/create' exact element={<MoviesInsert />} />
        <Route path='/movies/update/:id' exact element={<MoviesUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
