
const express = require(`express`);
const Site = require(`../../models/Site`);
const api = express.Router();

api.get(`/`, async (req, res) => {
  const sites = await Site.query();
  res.json(sites);
});

api.get(`/company/:companyId`, async (req, res) => {
  const sites = await Site.query()
  .where({ company_id: req.params.companyId })
  .withGraphFetched(`company`);

  res.json(sites);
})


api.post(`/`, async (req, res) => {
  const site = await Site.query()
  .insertAndFetch({
    name: req.body.name,
    address: req.body.address,
    company_id: req.body.company_id,
    postalCode: req.body.postalCode,
    city: req.body.city,

  });

  res.json(site);
});


module.exports = api;
