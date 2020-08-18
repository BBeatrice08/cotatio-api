
const express = require(`express`);
const User = require(`../../models/User`);
const api = express.Router();
const { NotFoundError } = require('objection');

api.get(`/`, async (req, res) => {
  const users = await User.query();
  res.json(users);
});

/* API OK
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
*/

/* API TEST*/
api.post(`/`, async (req, res) => {
  try {
    const user = await User.query()
    .insertAndFetch({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
        // function errorHandler(err, res) {
        //   if (err) return res.status(500).send("there was a problem with the user");
        //   //res.json(user);
        // }
    // .timeout({
    //   message: `il y a une erreur`,
    //   type: `Custom type`
    // })
    // .connection({
    //   message: `il y a une erreur de connection`
    // });

    res.json(user);
  } catch (err) {

  // if(err instanceof NotFoundError) {
  //   return res.status(404).json({
  //     error: 'NotFoundError',
  //     message: `industry not found`,
  //   });
  // }

  return res.status(500).send("Vous avez rencontré une erreur");
}
  res.json(user);
});

module.exports = api;
