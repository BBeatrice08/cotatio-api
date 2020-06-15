
const express = require(`express`);
const Quotation = require(`../../models/Quotation`);
const api = express.Router();

api.get(`/`, (req, res) => {
  res.json({
    success: true,
  })
});

api.get(`/machine/:machineId`, async (req, res) => {
  const quotations = await Quotation.query()
  .where({ machine_id: req.params.machineId })
  .withGraphFetched(`machine`);

  res.json(quotations);
});

api.post(`/`, async (req, res) => {
  const quotation = await Quotation.query()
  .insertAndFetch({
    date: req.body.dateNow,
    machine_id: req.body.machine_id,
    user_id: req.body.user_id
  });

  res.json(quotation);
});

module.exports = api;
