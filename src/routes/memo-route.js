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

module.exports = router;
