import getRequest from "./getRequest";

describe("getRequest function works as expected", () => {
  test("/get-member endpoint returns a member", () => {
    const mockResponse = {
      member_name: "Dan"
    };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      }).catch(console.error)
    );
    getRequest("/get-member?member_id=3").then(res => {
      expect(res.member_name).toBe("Dan");
    });
  });
});
