const dbBuild = require("../model/dbBuild");
const dbConnection = require("../model/dbConnection");
const { getMember } = require("../queries/getData");
const fs = require("fs");
const sql = fs.readFileSync(`${__dirname}/../model/schema.sql`).toString();

beforeEach(() => {
  return dbBuild(sql);
});

test("get all members from members table", () => {
  // expect(getMember(3)).toEqual('dan')
  getMember(3).then(data => {
    expect(data.rows[0].member_name).toBe("Dan");
  });
});
