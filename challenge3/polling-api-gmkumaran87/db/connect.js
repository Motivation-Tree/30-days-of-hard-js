const mongoose = require("mongoose");

const connectDb = () => {
  return mongoose
    .connect(process.env.MONGO_URI)
    .then((data) => console.log("Connected to DB successfully"))
    .catch((err) => console.error(err));
};

module.exports = connectDb;
