
const path = require(`path`);
const fs = require(`fs-extra`);
const express = require(`express`);
const apiRouter = express.Router();

async function loadApis() {
  const apisPath = path.resolve(__dirname, `apis`);
  const apiItems = await fs.readdir(apisPath);
  apiItems.forEach(apiName => {
    const apiPath = path.resolve(apisPath, apiName);
    try {
      apiRouter.use(`/${apiName}`, require(apiPath));
    } catch (e) {
      console.log(e);
    }
  });
}

loadApis();

module.exports = apiRouter;
