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
      "SELECT categories.category_name, offers.offer_name, offers.offer_description FROM offers JOIN categories ON offers.category_id=categories.category_id WHERE offers.member_id=$1",
      [id]
    )
    .then(data => data.rows[0]);
};

const getRequest = id => {
  return dbConnection
    .query(
      "SELECT categories.category_name, requests.request_name, requests.request_description FROM requests JOIN categories ON requests.category_id=categories.category_id WHERE requests.member_id=$1",
      [id]
    )
    .then(data => data.rows[0]);
};

module.exports = {
  getMember,
  getOffer,
  getRequest
};
