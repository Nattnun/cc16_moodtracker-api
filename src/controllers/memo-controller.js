const catchError = require("../utils/catch-error");
const createError = require("../utils/create-error");

const memoService = require("../services/memo-service");

exports.createEmotionMemo = catchError(async (req, res, next) => {
  //create time
  const time = new Date();
  console.log("time", time);
  const timeHour = +JSON.stringify(time).slice(12, 14) + 7;
  console.log("timePeriod", timeHour);

  //find period of time in day
  const getTimePeriod = (hours) => {
    if (hours >= 6 && hours < 12) {
      return "MORNING";
    } else if (hours >= 12 && hours < 17) {
      return "AFTERNOON";
    } else if (hours >= 17 && hours < 20) {
      return "EVENINGS";
    } else {
      return "LATENIGHT";
    }
  };

  req.body.timePeriod = getTimePeriod(timeHour);
  // console.log("req.body.timePeriod", req.body.timePeriod);

  // console.log("***********day**********", time.getDay());

  const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const dayOfWeek = (dayNumber) => {
    return weekDay[dayNumber];
  };

  req.body.weekDay = dayOfWeek(time.getDay());

  console.log("*********weekday********", req.body.weekDay);

  const memo = await memoService.createEmotionMemo(req.body);

  res.status(201).json(memo);
});

exports.getLatestMemo = catchError(async (req, res, next) => {
  const memo = await memoService.getLatestMemo(+req.params.userId);

  res.status(200).json(memo);
});

exports.getAllMemo = catchError(async (req, res, next) => {
  const memo = await memoService.getAllMemo(+req.params.userId);

  res.status(200).json(memo);
});

exports.getBreakDownMemo = catchError(async (req, res, next) => {
  const memo = await memoService.getBreakDownMemo(+req.params.userId);

  res.status(200).json(memo);
});

exports.getMostEmotion = catchError(async (req, res, next) => {
  const emotion = await memoService.getMostEmotion(+req.params.userId);

  res.status(200).json(emotion);
});

//Time-period
exports.getMorningEmotion = catchError(async (req, res, next) => {
  const morning = await memoService.getMorningEmotion(+req.params.userId);

  res.status(200).json(morning);
});

exports.getAfternoonEmotion = catchError(async (req, res, next) => {
  const afternoon = await memoService.getAfternoonEmotion(+req.params.userId);

  res.status(200).json(afternoon);
});

exports.geEveningsEmotion = catchError(async (req, res, next) => {
  const evenings = await memoService.getEveningsEmotion(+req.params.userId);

  res.status(200).json(evenings);
});

exports.getLateNightEmotion = catchError(async (req, res, next) => {
  const lateNight = await memoService.getLateNightEmotion(+req.params.userId);

  res.status(200).json(lateNight);
});

//day-of-week
exports.getSundayEmotion = catchError(async (req, res, next) => {
  const sunData = await memoService.getSundayEmotion(+req.params.userId);

  res.status(200).json(sunData);
});

exports.getMondayEmotion = catchError(async (req, res, next) => {
  const monData = await memoService.getMondayEmotion(+req.params.userId);

  res.status(200).json(monData);
});

exports.getTuesdayEmotion = catchError(async (req, res, next) => {
  const tueData = await memoService.getTuesdayEmotion(+req.params.userId);

  res.status(200).json(tueData);
});

exports.getWednesdayEmotion = catchError(async (req, res, next) => {
  const wedData = await memoService.getWednesdayEmotion(+req.params.userId);

  res.status(200).json(wedData);
});

exports.getThursdayEmotion = catchError(async (req, res, next) => {
  const thuData = await memoService.getThursdayEmotion(+req.params.userId);

  res.status(200).json(thuData);
});

exports.getFridayEmotion = catchError(async (req, res, next) => {
  const friData = await memoService.getFridayEmotion(+req.params.userId);

  res.status(200).json(friData);
});

exports.getSaturdayEmotion = catchError(async (req, res, next) => {
  const satData = await memoService.getSaturdayEmotion(+req.params.userId);

  res.status(200).json(satData);
});
