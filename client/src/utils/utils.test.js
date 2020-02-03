import getRequest from "./getRequest";
import postcodeConverter from "./postcodeConverter";

// test("postcodeConverter converts postcodes", () => {
//   const mockResponse = {
//     result: {
//       lng: -0.108,
//       lat: 51.564
//     }
//   };
//   global.fetch = jest.fn().mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(mockResponse)
//     }).catch(console.error)
//   );
//   return postcodeConverter("N4 3HH").then(res => {
//     expect(res.lat).toBeTruthy();
//     expect(res.lng).toBeTruthy();
//     console.log(res);
//   });
// });

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
