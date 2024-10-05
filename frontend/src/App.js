import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import the Navbar component
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieForm from './components/MovieForm';
import Login from './components/Login';
import Register from './components/Register';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />  {/* Include the Navbar */}
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/" element={<MovieList />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/add-movie" element={<MovieForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
