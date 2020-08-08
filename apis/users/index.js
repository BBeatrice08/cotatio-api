
const express = require(`express`);
const User = require(`../../models/User`);
const api = express.Router();

api.get(`/`, async (req, res) => {
  const users = await User.query();
  res.json(users);
});

api.post(`/`, async (req, res) => {
  const user = await User.query()
  .insertAndFetch({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  res.json(user);
});

module.exports = api;
