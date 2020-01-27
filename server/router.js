const express = require("express");
const router = express.Router();
const path = require("path");
const { getMember, getOffer, getRequest } = require("./queries/getData");

router.get("/get-member", (req, res) => {
  const memberId = req.query.member_id;
  getMember(memberId).then(data => {
    res.json(data);
  });
});

router.get("/profile", (req, res) => {

  
  Promise.all([getMember(),getOffer,(),getRequest()])
})
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
