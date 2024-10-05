import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MovieForm() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movie = { title, genre, director, releaseYear, description };

    try {
      await axios.post('/movies', movie, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Movie</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} required />
      <input type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Save Movie</button>
    </form>
  );
}

export default MovieForm;
