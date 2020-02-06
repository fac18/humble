const fs = require("fs");
const dbQuery = require("../model/dbQuery");
const schema = fs.readFileSync(`${__dirname}/../model/schema.sql`).toString();

const {
  getMember,
  getOffer,
  getRequest,
  categoryList,
  searchOfferAll,
  searchOfferCategory,
  searchRequestAll
} = require("../queries/getData");

beforeEach(() => {
  return dbQuery(schema);
});

test("get a specific member from members table", () => {
  return getMember(3).then(member => {
    expect(member.member_name).toBe("Dan");
  });
});

test("get member's offers", () => {
  return getOffer(2).then(offers => {
    expect(offers[0].offer_name).toBe("Bureaucracy");
  });
});

test("get member's requests", () => {
  return getRequest(4).then(requests => {
    expect(requests[0].request_name).toBe("Carers");
  });
});

test("get list of categories", () => {
  return categoryList().then(requests => {
    expect(requests[0].category_id).toBe(1);
  });
});

test("search for all offers", () => {
  return searchOfferAll().then(requests => {
    expect(requests[0].offer_name).toBe("Caring Experience");
  });
});

test("search for offers by category", () => {
  return searchOfferCategory(6).then(requests => {
    expect(requests[0].offer_name).toBe("DIY");
  });
});

test("search for all requests", () => {
  return searchRequestAll().then(requests => {
    expect(requests[0].request_name).toBe("drawing");
  });
});
