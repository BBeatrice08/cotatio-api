
const express = require(`express`);
const User = require(`../../models/User`);
const api = express.Router();
var bcrypt = require(`../../node_modules/bcryptjs`);
var salt = bcrypt.genSaltSync(10);

api.get(`/`, async (req, res) => {
  const users = await User.query();
  res.json(users);
});

api.post(`/`, async (req, res) => {
  try {
    const user = await User.query()
    .insertAndFetch({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync((req.body.password), salt),
    })
    .select('user');

    res.json(user);
  } catch (err) {

  return res.status(500).send("Vous avez rencontré une erreur");
}
  res.json(user);
});

module.exports = api;
