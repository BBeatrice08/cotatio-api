
const express = require(`express`);
const Machine = require(`../../models/Machine`);
const api = express.Router();

api.get(`/`, async (req, res) => {
  const machines = await Machine.query();
  res.json(machines);
});

api.get(`/:id`, async (req, res) => {
  const machines = await Machine.query()
  .where('id', req.params.id);
  res.json(machines);
});

api.get(`/production-line/:production_lineId`, async (req, res) => {
  const machines = await Machine.query()
  .where('production_line_id', req.params.production_lineId )
  .withGraphFetched(`production_line`);

  res.json(machines);
});

api.get(`/area/:areaId`, async (req, res) => {
  const machines = await Machine.query()  
  .withGraphJoined(`production_line.area`)
  .where('production_line:area.id', req.params.areaId );

  res.json(machines);
});

api.get(`/site/:siteId`, async (req, res) => {
  const machines = await Machine.query()  
  .withGraphJoined(`production_line.area.site`)
  .where('production_line:area:site.id', req.params.siteId );

  res.json(machines);
});

api.get(`/company/:companyId`, async (req, res) => {
  const machines = await Machine.query()  
  .withGraphJoined(`production_line.area.site.company`)
  .where('production_line:area:site:company.id', req.params.companyId );

  res.json(machines);
});

api.post(`/`, async (req, res) => {
  const machine = await Machine.query()
  .insertAndFetch({
    name: req.body.name,
    production_line_id: req.body.production_line_id,
    company_id: req.body.company_id,
    site_id: req.body.site_id,
    area_id: req.body.area_id
  });

  res.json(machine);
});

module.exports = api;
