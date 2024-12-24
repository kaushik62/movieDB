import React from "react";

const MovieCard = ({ movie }) => {

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={movie.image} alt={""} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.movie}</h2>
        <button className="bg-lime-600 text-white p-2 rounded"><a href= {movie.imdb_url}>Watch Movie</a></button>
        <p className="text-gray-800 mt-2">Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
