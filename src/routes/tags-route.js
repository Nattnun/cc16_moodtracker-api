const express = require("express");
const tagsController = require("../controllers/tags-controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/themeTags/:userId", tagsController.getThemeTagsByUserId);
router.get("/placeTags/:userId", tagsController.getPlaceTagsByUserId);
router.get("/peopleTags/:userId", tagsController.getPeopleTagsByUserId);

//create
router.post(
  "/createTheme/:userId",
  authenticate,
  tagsController.createThemeTag
);
router.post(
  "/createPlace/:userId",
  authenticate,
  tagsController.createPlaceTag
);
router.post(
  "/createPeople/:userId",
  authenticate,
  tagsController.createPeopleTag
);

//delete
router.delete("/deleteTheme/:themeId", tagsController.deleteThemeTag);
router.delete("/deletePlace/:placeId", tagsController.deletePlaceTag);
router.delete("/deletePeople/:peopleId", tagsController.deletePeopleTag);

module.exports = router;
