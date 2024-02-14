const express = require("express");

const emotionController = require("../controllers/emotion-controller");

const router = express.Router();

router.get("/getEmotionByGroup", emotionController.getEmotionByGroup);

module.exports = router;
