const express = require("express");
const memoController = require("../controllers/memo-controller");

const router = express.Router();

router.post("/createMemo", memoController.createEmotionMemo);

module.exports = router;
