const express = require('express');
const bodyParser = require(`body-parser`);
const Knex = require(`knex`);
const { Model } = require('objection');
const apis = require(`./apis.js`);
const app = express();
const port = 3100;

const environment = process.env.NODE_ENV || `development`;
const knexConfig = require('./knexfile.js')[environment];
const knex = Knex(knexConfig);

Model.knex(knex);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', apis);

app.listen(port, () => console.log(`Listening on port ${port}`));
