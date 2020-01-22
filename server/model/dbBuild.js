const fs = require('fs');

const dbConnection = require('./dbConnection');

const dbBuild = (sql) => dbConnection.query(sql);

module.exports = dbBuild;