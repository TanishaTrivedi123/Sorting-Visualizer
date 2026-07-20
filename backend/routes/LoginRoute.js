const express = require("express");
const router = express.Router();
const loginLogic = require("../controller/LoginController")

router.post("/login", loginLogic);

module.exports = router;