
const express = require(`express`);
const User = require(`../../models/User`);
const api = express.Router();
const { NotFoundError } = require('objection');

api.get(`/`, async (req, res) => {
  const users = await User.query();
  res.json(users);
});

/* API TEST OK*/
api.post(`/`, async (req, res) => {
  try {
    const user = await User.query()
    .insertAndFetch({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
    //.returning('email');
    .select('user');

    res.json(user);
  } catch (err) {

  return res.status(500).send("Vous avez rencontré une erreur");
}
  res.json(user);
});

module.exports = api;
