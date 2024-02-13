const createError = (messages, statusCode) => {
  const error = new Error(messages);
  error.statusCode = statusCode;
  throw error;
};

module.exports = createError;
