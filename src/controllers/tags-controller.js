const catchError = require("../utils/catch-error");
const tagsService = require("../services/tags-service");

exports.getThemeTagsByUserId = catchError(async (req, res, next) => {
  const themeTags = await tagsService.getThemesTagsByUserId(+req.params.userId);

  res.status(200).json({ themeTags });
});

exports.getPlaceTagsByUserId = catchError(async (req, res, next) => {
  const placeTags = await tagsService.getPlacesTagsByUserId(+req.params.userId);

  res.status(200).json({ placeTags });
});

exports.getPeopleTagsByUserId = catchError(async (req, res, next) => {
  const peopleTags = await tagsService.getPeopleTagsByUserId(
    +req.params.userId
  );

  res.status(200).json({ peopleTags });
});
