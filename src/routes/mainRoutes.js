const express = require("express");
const mainController = require("../controllers/mainController.js");
const userColorCookie = require("../middlewares/userColorCookie");

const router = express.Router();

router.get("/", mainController.index);

router.get("/dashboard", userColorCookie,mainController.dashboard);

router.post("/", mainController.login);

module.exports = router;
