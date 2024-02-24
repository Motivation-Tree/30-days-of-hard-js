const Polls = require("../models/Poll");

const createPoll = async (req, res) => {
  console.log("Creating Poll", req.body);
  try {
    const poll = await Polls.create(req.body);
    res.status(200).json({ msg: "Poll created successfully", poll });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong", error });
  }
};

const getAllPolls = async (req, res) => {
  console.log("Getting all polls");
  try {
    const polls = await Polls.find({});
    res.status(200).json({ msg: "Polls received successfully", polls });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong", error });
  }
};
module.exports = { createPoll, getAllPolls };
