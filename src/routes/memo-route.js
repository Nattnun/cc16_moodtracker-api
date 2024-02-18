const express = require("express");
const memoController = require("../controllers/memo-controller");

const router = express.Router();

router.post("/createMemo", memoController.createEmotionMemo);
router.get("/getLatestMemo/:userId", memoController.getLatestMemo);
router.get("/getAllMemo/:userId", memoController.getAllMemo);
router.get("/getBreakDownMemo/:userId", memoController.getBreakDownMemo);
router.get("/getMostEmotion/:userId", memoController.getMostEmotion);
//time-period
router.get("/getMorning/:userId", memoController.getMorningEmotion);
router.get("/getAfternoon/:userId", memoController.getAfternoonEmotion);
router.get("/getEvenings/:userId", memoController.geEveningsEmotion);
router.get("/getLateNight/:userId", memoController.getLateNightEmotion);
//day-of-week
router.get("/getSunday/:userId", memoController.getSundayEmotion);
router.get("/getMonday/:userId", memoController.getMondayEmotion);
router.get("/getTuesday/:userId", memoController.getTuesdayEmotion);
router.get("/getWednesday/:userId", memoController.getWednesdayEmotion);
router.get("/getThursday/:userId", memoController.getThursdayEmotion);
router.get("/getFriday/:userId", memoController.getFridayEmotion);
router.get("/getSaturday/:userId", memoController.getSaturdayEmotion);

//getTags
router.get("/getTheme/:userId", memoController.getTheme);
router.get("/getPlace/:userId", memoController.getPlace);
router.get("/getPeople/:userId", memoController.getPeople);

module.exports = router;
