import React, { useEffect, useState } from "react";
import SingleMovie from "../components/SingleMovie";
import movieService from "../services/MovieService";
function AppMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await movieService.getAll();

      setMovies(data);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h2>Movies :</h2>
      <ul>
        {movies.map((movie) => (
          <SingleMovie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            director={movie.director}
          />
        ))}
      </ul>
    </div>
  );
}

export default AppMovies;