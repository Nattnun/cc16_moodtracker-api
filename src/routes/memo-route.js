const express = require("express");
const memoController = require("../controllers/memo-controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/createMemo", authenticate, memoController.createEmotionMemo);
router.get("/getLatestMemo/:userId", memoController.getLatestMemo);
router.get("/getAllMemo/:userId", memoController.getAllMemo);
router.get("/getBreakDownMemo/:userId", memoController.getBreakDownMemo);
router.get("/getMostEmotion/:userId", memoController.getMostEmotion);

router.get("/getMemo/:memoId", authenticate, memoController.getMemoById);

router.patch(
  "/updateTags/:memoId",
  authenticate,
  memoController.updateTagsByMemoId
);

router.delete(
  "/deleteMemo/:memoId",
  authenticate,
  memoController.deleteMemoByMemoId
);

//time-period
router.get("/getMorning/:userId", memoController.getMorningEmotion);
router.get("/getAfternoon/:userId", memoController.getAfternoonEmotion);
router.get("/getEvenings/:userId", memoController.getEveningsEmotion);
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
