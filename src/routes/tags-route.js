const express = require("express");
const tagsController = require("../controllers/tags-controller");

const router = express.Router();

router.get("/themeTags/:userId", tagsController.getThemeTagsByUserId);
router.get("/placeTags/:userId", tagsController.getPlaceTagsByUserId);
router.get("/peopleTags/:userId", tagsController.getPeopleTagsByUserId);

router.post("/createTheme/:userId", tagsController.createThemeTag);
router.post("/createPlace/:userId", tagsController.createPlaceTag);
router.post("/createPeople/:userId", tagsController.createPeopleTag);

module.exports = router;
