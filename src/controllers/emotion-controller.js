const catchError = require("../utils/catch-error");
const createError = require("../utils/create-error");
const emotionService = require("../services/emotion-service");

exports.getEmotionByGroup = catchError(async (req, res, next) => {
  const emotions = await emotionService.getEmotionsByGroup(
    req.body.emotionalGroup
  );

  res.status(200).json({ count: emotions.length, emotions });
});

exports.getEmotionById = catchError(async (req, res, next) => {
  const emotion = await emotionService.getEmotionById(+req.params.emoId);

  res.status(200).json({ emotion });
});
