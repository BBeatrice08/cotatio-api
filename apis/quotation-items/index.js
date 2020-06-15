
const express = require(`express`);
const Quotation_Item = require(`../../models/Quotation_Item`);
const api = express.Router();

api.get(`/`, (req, res) => {
  res.json({
    success: true,
  })
});
/*
api.get(`/machine/:machineId`, async (req, res) => {
  const quotations = await Quotation.query()
  .where({ machine_id: req.params.machineId })
  .withGraphFetched(`machine`);

  res.json(quotations);
});
*/

api.post(`/`, async (req, res) => {
  const quotation_item = await Quotation_Item.query()
  .insertAndFetch({
    quotation_id: req.body.quotation_id,
    item_id: req.body.item_id,
    isConcerned: req.body.isConcerned,
    score: req.body.score,
    comment: req.body.comment,
  });

  res.json(quotation_item);
});

module.exports = api;
