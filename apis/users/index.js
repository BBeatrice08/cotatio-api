
const express = require(`express`);
const User = require(`../../models/User`);
const api = express.Router();

api.get(`/`, async (req, res) => {
  const users = await User.query();
  res.json(users);
});

// api.post(`/`, async (req, res) => {
//   const company = await Company.query()
//   .insertAndFetch({
//     name: req.body.name,
//   });

//   res.json(company);
// });

module.exports = api;
