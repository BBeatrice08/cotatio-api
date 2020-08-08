
const express = require(`express`);
const Session = require(`../../models/Session`);
const api = express.Router();

// api.get(`/`, (req, res) => {
//   res.json({
//     success: true,
//   })
// }),

api.get(`/`, async (req, res) => {
  const sessions = await Session.query();
  res.json(sessions);
});

api.post(`/`, async (req, res) => {
  const session = await Session.query()
  .insertAndFetch({
    date: req.body.date,
    user_email: req.body.user_email,
    user_password: req.body.user_password
  });

  res.json(session);
});

module.exports = api;
