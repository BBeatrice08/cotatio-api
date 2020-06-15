
const express = require(`express`);
const Area = require(`../../models/Area`);
const api = express.Router();

api.get(`/`, async (req, res) => {
  const areas = await Area.query();
  res.json(areas);
});

api.get(`/site/:siteId`, async (req, res) => {
  const areas = await Area.query()
  .where({ site_id: req.params.siteId })
  .withGraphFetched(`site`);

  res.json(areas);
});

api.get(`/company/:companyId`, async (req, res) => {
  const areas = await Area.query()  
  .withGraphJoined(`site.company`)
  .where( 'site:company.id', req.params.companyId );

  res.json(areas);
});

api.post(`/`, async (req, res) => {
  const area = await Area.query()
  .insertAndFetch({
    name: req.body.name,
    site_id: req.body.site_id,

  });

  res.json(area);
});

module.exports = api;