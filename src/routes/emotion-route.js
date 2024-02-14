const express = require("express");

const emotionController = require("../controllers/emotion-controller");

const router = express.Router();

router.post("/getEmotionByGroup", emotionController.getEmotionByGroup);
router.get("/getEmotionById/:emoId", emotionController.getEmotionById);

module.exports = router;
