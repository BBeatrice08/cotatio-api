
const express = require(`express`);
const Session = require(`../../models/Session`);
const User = require(`../../models/User`);
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

/*api.post(`/`, async (req, res) => {
  const session = await Session.query()
  .insertAndFetch({
    date: req.body.date,
    user_email: req.body.user_email,
    user_password: req.body.user_password
  });

  res.json(session);
});*/

// il  s'agit d'un faux post. Il s'agit finalement d'un get pour récupérer les données renvoyées
// par le serveur
api.post(`/`, async (req, res) => {
  const users = await User.query()
  .where( 'user.email', req.body.email)
  .where( 'user.password', req.body.password);
  res.json(users);
});



module.exports = api;
