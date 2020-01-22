const dbBuild = require("./dbBuild");

const sql = fs.readFileSync(`${__dirname}/schema.sql`).toString();

dbBuild(sql).then(console.log).catch(console.log);