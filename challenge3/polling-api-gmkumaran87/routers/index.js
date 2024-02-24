const express = require("express");
const { getAllPolls, createPoll } = require("../controllers/pollsController");

const router = express.Router();
console.log("Router is listening");
router.route("/polls").get(getAllPolls).post(createPoll);

module.exports = router;
