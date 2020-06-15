// Update with your config settings.

const DEFAULT_CONFIG = {
  client: `pg`,
  connection: {
    host: `pg`,
    user: `postgres`,
    password: `password`,
    database: `cotatio`,
  },
};

module.exports = {

  development: DEFAULT_CONFIG,

  production: DEFAULT_CONFIG,

};
