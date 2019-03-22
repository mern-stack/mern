const express = require("express");
const router = express.Router();
const controller = require('../app/providers/controllerProvider');

router.get('/', controller.registerController.page);


module.exports = router;