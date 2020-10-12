
const express = require(`express`);
const Item = require(`../../models/Item`);
const api = express.Router();

api.get(`/`, async (req, res) => {
  const items = await Item.query()
  .orderBy('id');
  
  res.json(items);
});

api.get(`/indicator/:indicatorId`, async (req, res) => {
  const items = await Item.query()
  .where( 'indicator_id', req.params.indicatorId )
  .withGraphFetched(`indicator`)
  .orderBy('id');

  res.json(items);
});

module.exports = api;
