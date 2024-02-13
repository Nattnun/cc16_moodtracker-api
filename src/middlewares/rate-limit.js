const { rateLimit } = require("express-rate-limit"); // import and destructuring

module.exports = rateLimit({
  windowMs: 1000 * 60 * 5,
  limit: 100,
  message: { message: "too many request in a given period" },
}); // limit request
