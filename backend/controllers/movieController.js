const Movie = require('../models/movie');

module.exports = {
  getMovies: (req, res) => {
    res.json({ message: 'List of movies' });
  }
};

exports.createMovie = async (req, res) => {
  const { title, genre, director, releaseYear, description } = req.body;
  const newMovie = new Movie({ title, genre, director, releaseYear, description });
  await newMovie.save();
  res.json(newMovie);
};

exports.updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
};

exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.send('Movie deleted');
};
