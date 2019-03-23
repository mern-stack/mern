const express = require("express");
const router = express.Router();
const controller = require("../app/providers/controllerProvider");

// auth routes
router.post("/register", controller.registerController.register);
router.post("/login", controller.registerController.login);

module.exports = router;
