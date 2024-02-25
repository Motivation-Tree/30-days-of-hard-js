const express = require("express");
const {
  getAllPolls,
  createPoll,
  voteInPoll,
} = require("../controllers/pollsController");

const router = express.Router();
console.log("Router is listening");
router.route("/polls").get(getAllPolls).post(createPoll);
router.post("/polls/:pollId/vote", voteInPoll);
module.exports = router;
