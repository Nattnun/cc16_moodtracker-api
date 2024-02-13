const bcrypt = require("bcryptjs");

exports.hash = (input) => bcrypt.hash(input, 10);
exports.compare = (plainText, hashValue) =>
  bcrypt.compare(plainText, hashValue);
