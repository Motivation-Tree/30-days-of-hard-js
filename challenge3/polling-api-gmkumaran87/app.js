require("dotenv").config();
const express = require("express");
const app = express();
const pollRouter = require("./routers/index");
const connectDb = require("./db/connect");

app.use(express.json());
app.use("/api", pollRouter);

const port = process.env.PORT || 5000;

// app.listen(port, console.log("App listening on port", port));
const start = async () => {
  try {
    const db = await connectDb();
    app.listen(port, console.log("App listening on port", port));
  } catch (err) {
    console.log("Error", err);
  }
};

start();
