
const express = require(`express`);
const Production_line = require(`../../models/Production_line`);
const api = express.Router();

api.get(`/`, async (req, res) => {
  const production_lines = await Production_line.query();
  res.json(production_lines);
});

api.get(`/area/:areaId`, async (req, res) => {
  const production_lines = await Production_line.query()
  .where({ area_id: req.params.areaId })
  .withGraphFetched(`area`);

  res.json(production_lines);
});

api.get(`/site/:siteId`, async (req, res) => {
  const production_lines = await Production_line.query()  
  .withGraphJoined(`area.site`)
  .where('area:site.id', req.params.siteId );

  res.json(production_lines);
});

api.get(`/company/:companyId`, async (req, res) => {
  const production_lines = await Production_line.query()
  .withGraphJoined(`area.site.company`)
  .where('area:site:company.id', req.params.companyId );

  res.json(production_lines);
});

api.post(`/`, async (req, res) => {
  const production_line = await Production_line.query()
  .insertAndFetch({
    name: req.body.name,
    machineNumber: req.body.machineNumber,
    area_id: req.body.area_id,
  });

  res.json(production_line);
});

module.exports = api;
