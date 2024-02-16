const express = require("express");
const memoController = require("../controllers/memo-controller");

const router = express.Router();

router.post("/createMemo", memoController.createEmotionMemo);
router.get("/getLatestMemo/:userId", memoController.getLatestMemo);

module.exports = router;
