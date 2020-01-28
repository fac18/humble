const dbQuery = require("./dbQuery");
const fs = require("fs");

const sql = fs.readFileSync(`${__dirname}/schema.sql`).toString();

dbQuery(sql)
  .then(console.log)
  .catch(console.log);
