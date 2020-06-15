
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
  .withGraphFetched(`indicator`);

  res.json(items);
})

/*
api.post(`/item/{$iteName}/indicator/:indicatorId`, async (req, res) => {
  const item = await Item.query()
  .insertAndFetch({
    name: req.body.name,
    score_label_1: req.body.score_label_1,
    score_label_2: req.body.score_label_2,
    score_label_3: req.body.score_label_3,
    score_label_4: req.body.score_label_4,
    description: req.body.description,
    group_id: req.body.group_id,
    indicator_id: req.body.indicator_id,

  });

  res.json(item);
});
*/

module.exports = api;
