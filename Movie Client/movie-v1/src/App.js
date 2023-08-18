import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route index element={<Home movies={movies} />}></Route>
        <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// {movies.map((movie) => (
//   <div key={movie.id}>{movie.title}</div>
// ))}
