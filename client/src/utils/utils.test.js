import getRequest from "./getRequest";

describe("getRequest function works as expected", () => {
  test("/get-member endpoint returns a member", () => {
    const mockResponse = {
      member_name: "Dan"
    };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    );
    getRequest("/get-member?member_id=3").then(res => {
      expect(res.member_name).toBe("Dan");
    });
  });
  // test("/get-member-skills endpoint returns a number", () => {
  //   const mockResponse = {
  //     interactions: 3
  //   };
  //   global.fetch = jest.fn().mockImplementation(() =>
  //     Promise.resolve({
  //       text: () => Promise.resolve(mockResponse)
  //     })
  //   );
  //     getInteractions
  // });
});
