const dbConnection = require("../model/dbConnection");

const getMember = id => {
  return dbConnection
    .query(
      "SELECT member_name, postcode, avatar_url FROM members WHERE member_id=$1",
      [id]
    )
    .then(data => data.rows[0]);
};

const getOffer = id => {
  return dbConnection
    .query(
      "SELECT offer_name, offer_description FROM offers WHERE member_id=$1",
      [id]
    )
    .then(data => data.rows[0]);
};

const getRequest = id => {
  return dbConnection
    .query(
      "SELECT request_name, request_description FROM requests WHERE member_id=$1",
      [id]
    )
    .then(data => data.rows[0]);
};

module.exports = {
  getMember,
  getOffer,
  getRequest
};
