const fs = require('fs');

const dbConnection = require('./dbConnection');

const sql = fs.readFileSync(`${__dirname}/schema.sql`).toString();

module.exports = dbConnection.query(sql);