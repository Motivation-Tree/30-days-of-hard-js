// Define and export an error handling middleware
const errorHandler = (err, req, res, next) => {
  console.log("err:", err); // Log the error to the console for debugging purposes
  res.status(500).json({
    error: err.message || err,
  }); // Respond with a 500 (Internal Server Error) status and a JSON object containing the error message or the error itself
};

module.exports = errorHandler;
