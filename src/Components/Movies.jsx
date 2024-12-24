import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyapi.online/api/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading movies...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
