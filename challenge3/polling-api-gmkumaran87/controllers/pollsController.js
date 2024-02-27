const Polls = require("../models/Poll");
const ObjectId = require("mongoose").Types.ObjectId;

const createPoll = async (req, res) => {
  console.log("Creating Poll", req.body);

  const { question, options } = req.body;

  if (!question) {
    res.status(500).send("Please create a Poll with question");
  }
  if (options?.length < 2) {
    res
      .status(500)
      .json({ msg: "Please create a Poll with atleast 2 options" });
    return;
  }
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
const voteInPoll = async (req, res) => {
  const pollId = req.params.pollId;
  const voteId = Number(req.body.voteId);

  console.log("Getting vote for a poll", pollId, voteId);
  try {
    const poll = await Polls.findById({ _id: pollId });

    console.log("Getting poll", poll);
    if (!poll) {
      res.status(404).json({ msg: "Requested poll does not exist", poll });
    }
    const options = poll.options;
    const votes = poll.votes;
    const optionsLength = options?.length;

    console.log("Poll options", { options: options, votes: votes });
    if (voteId >= 0 && voteId < optionsLength) {
      let existingVote = votes[voteId];
      votes[voteId] = existingVote ? Number(existingVote) + 1 : 1;
      const voteUpdated = await Polls.findByIdAndUpdate(
        { _id: pollId },
        { votes: votes },
        { new: true }
      );
      console.log("Update Poll", voteUpdated);

      if (voteUpdated) {
        res.status(200).json({ msg: "Vote casted successfully", voteUpdated });
      }
    } else {
      console.log("Update Poll ELSEeEEEEEE");
      res.status(500).json({ msg: "Please enter valid option" });
    }
  } catch (error) {
    console.log("Poll error", { error: error });
    res.status(500).json({ msg: error.message });
  }
};
module.exports = { createPoll, getAllPolls, voteInPoll };
