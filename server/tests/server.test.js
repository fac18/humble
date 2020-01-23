const request = require("supertest");
const app = require("../index");

test("test get-member endpoint path works", () => {
  return request(app)
    .get("/get-member?member_id=3")
    .then(response => {
      expect(response.statusCode).toBe(200);
    });
});
