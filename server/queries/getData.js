const dbConnection = require("../model/dbConnection");

const getMember = id => {
  return dbConnection.query(
    "SELECT member_name, postcode, avatar_url FROM members WHERE member_id=$1",
    [id]
  );
};

module.exports = {
  getMember
};
