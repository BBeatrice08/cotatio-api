
const express = require(`express`);
const Indicator = require(`../../models/Indicator`);
const api = express.Router();

api.get(`/`, async (req, res) => {
  const indicators = await Indicator.query()
  .withGraphJoined('groups.items')
  .orderBy('id');
  res.json(indicators);
});

module.exports = api;
