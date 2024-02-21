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

//createTag

exports.createThemeTag = catchError(async (req, res, next) => {
  const themeTag = await tagsService.createThemeTag(
    req.body.name,
    +req.params.userId
  );

  res.status(201).json(themeTag);
});

exports.createPlaceTag = catchError(async (req, res, next) => {
  const placeTag = await tagsService.createPlaceTag(
    req.body.name,
    +req.params.userId
  );

  res.status(201).json(placeTag);
});

exports.createPeopleTag = catchError(async (req, res, next) => {
  const peopleTag = await tagsService.createPeopleTag(
    req.body.name,
    +req.params.userId
  );

  res.status(201).json(peopleTag);
});
