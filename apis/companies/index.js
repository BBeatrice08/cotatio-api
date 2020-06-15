
const express = require(`express`);
const Company = require(`../../models/Company`);
const api = express.Router();

api.get(`/`, async (req, res) => {
  const companies = await Company.query();
  res.json(companies);
});

api.post(`/`, async (req, res) => {
  const company = await Company.query()
  .insertAndFetch({
    name: req.body.name,
  });

  res.json(company);
});

module.exports = api;
