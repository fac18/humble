const { Pool } = require("pg");
const url = require("url");
require("env2")(".env");

const isTravis = process.env.NODE_ENV === "travis";
const isProduction = process.env.NODE_ENV === "production";

const DB_URL = isProduction
  ? process.env.DB_URL
  : isTravis
  ? process.env.DBTRAVIS_URL
  : process.env.DBTEST_URL;

if (!DB_URL) throw new Error("Environment variable not available");

const params = url.parse(DB_URL);

const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== "localhost"
};

module.exports = new Pool(options);
