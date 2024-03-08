require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const morgan = require("morgan");
const errorHandler = require("./middleware");
const metaDataRouter = require("./router/index");
const app = express();

app.use(express.json());
app.use(cors());
// app.use(morgan("dev"));

// app.get("/api/meta-data", (req, res) => {
//   console.log("Request received");

//   res.send(200).json({ message: "helloo" });
// });
app.use("/api", metaDataRouter);
const PORT = process.env.PORT || 5000;

// Implement async error handling using the custom 'errorHandler' middleware
app.use(errorHandler);

app.listen(PORT, () => console.log("App listening on port", PORT));
