const dbBuild = require("../model/dbBuild")
const dbConnection = require("../model/dbConnection")

beforeEach(() => {
    return dbBuild;
});

test("get all members from members table", () => {
    // expect(getMember(3)).toEqual('dan')
    getMember(3)
        .then(data => {
            expect(data.name).toBe('Dan')
        })
})

