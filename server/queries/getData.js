const dbConnection = require("../model/dbConnection");

const getMember = id => {
  return dbConnection
    .query(
      "SELECT member_name, email, postcode, avatar_url FROM members WHERE member_id=$1",
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
    .then(data => data.rows);
};

const getRequest = id => {
  return dbConnection
    .query(
      "SELECT categories.category_name, requests.request_name, requests.request_description FROM requests JOIN categories ON requests.category_id=categories.category_id WHERE requests.member_id=$1",
      [id]
    )
    .then(data => data.rows);
};

const searchOffer = category => {
  return dbConnection
    .query(
      "SELECT members.member_id, members.member_name, members.avatar_url, categories.category_name, offers.offer_name, offers.offer_description FROM offers JOIN members ON members.member_id=offers.member_id JOIN categories ON categories.category_id=offers.category_id WHERE offers.category_id=$1",
      [category]
    )
    .then(data => data.rows);
};

module.exports = {
  getMember,
  getOffer,
  getRequest,
  searchOffer
};
