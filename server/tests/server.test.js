const request = require("supertest");
const app = require("../index");

test("test get-member endpoint path works", () => {
  return request(app)
    .get("/get-member?member_id=3")
    .then(response => {
      expect(response.statusCode).toBe(200);
    });
});

test("test profile endpoint path works", () => {
  return request(app)
    .get("/get-profile?member_id=2")
    .then(response => {
      expect(response.statusCode).toBe(200);
    });
});
