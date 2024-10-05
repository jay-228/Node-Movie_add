import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from an API
    axios.get('/api/movies')
      .then(response => {
        setMovies(response.data);  // Set the movies data in state
      })
      .catch(error => {
        console.error('There was an error fetching the movies!', error);
      });
  }, []);  // The empty array ensures the effect runs only once (on component mount)

  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
          </div>
        ))
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default MovieList;
