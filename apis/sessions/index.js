
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
//pas possible de réaliser des vérifications dans l'API. On reçoit un fichier JSON non découpable
//pour identifier les éléments/ Le contrôle s'effectue dans l'ui dans le store. Bonne pratique ??
//Cependant on affiche maintenant l'erreur 500 qd prb de communication avec bdd
api.post(`/`, async (req, res) => {
  try {
    const users = await User.query()
    .where( 'user.email', req.body.email);
    //.where( 'user.password', req.body.password);
    //if (user.password == "admin") {
    //console.log(users);
    
    res.json(users);
  } catch {

    return res.status(500).send("Vous avez rencontré une erreur serveur");
  }

  res.json(users);
});



module.exports = api;
