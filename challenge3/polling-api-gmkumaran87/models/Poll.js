const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema(
  {
    question: {
      type: "string",
      required: [true, "Please enter a question"],
    },
    options: {
      type: "array",
      required: [true, "Please enter any one of the options"],
      default: {},
    },
    votes: {
      type: "object",
      default: {},
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Poll", pollSchema);
