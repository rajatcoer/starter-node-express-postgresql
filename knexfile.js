// Update with your config settings.
const path = require("path");
require("dotenv").config();
const {
  NODE_ENV = "development",
  DEVELOPMENT_DATABASE_URL,
  PRODUCTION_DATABASE_URL,
} = process.env;

const URL =
  NODE_ENV === "production"
    ? PRODUCTION_DATABASE_URL
    : DEVELOPMENT_DATABASE_URL;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: URL, //'postgresql://dev_icid_user:6eMbo3jo62H0ijIBJ81dmBniaKmtjlAL@dpg-cr27ifrtq21c73fm15g0-a.oregon-postgres.render.com/dev_icid?ssl=true',
    ssl: {
      rejectUnauthorized: false // This will allow connections without requiring SSL certificates to be valid.
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
  production: {
    client: 'postgresql',
    connection: URL, //'postgresql://dev_icid_user:6eMbo3jo62H0ijIBJ81dmBniaKmtjlAL@dpg-cr27ifrtq21c73fm15g0-a.oregon-postgres.render.com/dev_icid?ssl=true',
    ssl: {
      rejectUnauthorized: false // This will allow connections without requiring SSL certificates to be valid.
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    }
  }

};
