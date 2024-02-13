const express = require("express");

const authController = require("../controllers/auth-controller");
const authenticate = require("../middlewares/authenticate");

const {
  validateRegister,
  validateLogin,
} = require("../middlewares/validators/validate-auth");

const router = express.Router();

router.post("/register", validateRegister, authController.register);
router.post("/login", validateLogin, authController.login);
router.get("/user", authenticate, authController.getUser);

module.exports = router;
