const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(400).send('User already registered.');

  user = new User({ username, email, password });
  await user.save();

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.header('Authorization', token).send(token);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.header('Authorization', token).send(token);
};
