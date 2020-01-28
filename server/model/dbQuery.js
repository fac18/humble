const dbConnection = require("./dbConnection");

const dbQuery = sql => dbConnection.query(sql);

module.exports = dbQuery;
