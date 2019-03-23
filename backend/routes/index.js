const express = require("express");
const router = express.Router();
const controller = require("../app/providers/controllerProvider");
const passport = require("passport");

// auth routes
router.post("/register", controller.registerController.register);
router.post("/login", controller.registerController.login);

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  controller.loginController.currentUser
);

module.exports = router;
