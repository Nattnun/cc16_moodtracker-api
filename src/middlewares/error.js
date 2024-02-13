const { ValidationError } = require("joi");

module.exports = (err, req, res, next) => {
  console.log("errorMiddleware", err);
  if (err instanceof ValidationError) {
    err.statusCode = 400;
  }
  res.status(err.statusCode || 500).json({ message: err.message });
};
