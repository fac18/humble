const dbBuild = require("../model/dbBuild");
const dbConnection = require("../model/dbConnection");
const { getMember, getOffer } = require("../queries/getData");
const fs = require("fs");
const schema = fs.readFileSync(`${__dirname}/../model/schema.sql`).toString();

beforeEach(() => {
  return dbBuild(schema);
});

test("get all members from members table", () => {
  return getMember(3).then(member => {
    expect(member.member_name).toBe("Dan");
  });
});

test("get member's offers", () => {
  return getOffer(2).then(offer => {
    expect(offer.offer_name).toBe("football");
  });
});

test("get member's requests", () => {
  return getOffer(4).then(requests => {
    expect(requests.request_name).toBe("sushi");
  });
});
