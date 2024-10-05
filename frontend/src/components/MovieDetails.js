import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`/movies/${id}`);
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/movies/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/movie/${id}/edit`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default MovieDetails;
