const catchError = require("../utils/catch-error");
const tagsService = require("../services/tags-service");

exports.getThemeTagsByUserId = catchError(async (req, res, next) => {
  const res = await tagsService.getThemesTagsByUserId(req.params.userId);
});
