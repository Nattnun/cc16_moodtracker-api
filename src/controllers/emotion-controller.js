const catchError = require("../utils/catch-error");
const createError = require("../utils/create-error");
const emotionService = require("../services/emotion-service");

exports.getEmotionByGroup = catchError(async (req, res, next) => {
  const result = await emotionService.getEmotionsByGroup(
    req.body.emotionalGroup
  );
  console.log("reqbody", req.body);
  console.log(req.body.emotionalGroup);
  console.log("result", result);
  res.status(201).json({ result });
});
