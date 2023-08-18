import api from "./api/axiosConfig";
import { useState, useEffect } from "react";

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
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}

export default App;