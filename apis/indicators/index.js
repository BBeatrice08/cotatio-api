
const express = require(`express`);
const Indicator = require(`../../models/Indicator`);
const api = express.Router();

api.get(`/`, async (req, res) => {
  const indicators = await Indicator.query()
  .withGraphJoined('groups.items')
  .orderBy('id');
  res.json(indicators);
});

/*
api.post(`/`, async (req, res) => {
  const indicator = await Indicator.query()
  .insertAndFetch({
    name: req.body.name,
  });

  res.json(indicator);
});
*/
module.exports = api;
