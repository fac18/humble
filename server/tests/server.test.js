const supertest = require("supertest");
const app = require("../app");

let server;
let request;

beforeAll(done => {
  server = app.listen(done);
  request = supertest(server);
});

afterAll(done => {
  server.close(done);
});

test("test get-member endpoint path works", () => {
  return request.get("/get-member?member_id=3").then(response => {
    expect(response.statusCode).toBe(200);
  });
});

test("test profile endpoint path works", () => {
  return request.get("/get-profile?member_id=2").then(response => {
    expect(response.statusCode).toBe(200);
  });
});

test("test category-list endpoint path works", () => {
  return request.get("/category-list").then(response => {
    expect(response.statusCode).toBe(200);
  });
});

test("test search-offer-all endpoint path works", () => {
  return request.get("/search-offer-all").then(response => {
    expect(response.statusCode).toBe(200);
  });
});

test("test search-offer-category endpoint path works", () => {
  return request.get("/search-offer-category?category_id=3").then(response => {
    expect(response.statusCode).toBe(200);
  });
});

test("test search-request-all endpoint path works", () => {
  return request.get("/search-request-all").then(response => {
    expect(response.statusCode).toBe(200);
  });
});
