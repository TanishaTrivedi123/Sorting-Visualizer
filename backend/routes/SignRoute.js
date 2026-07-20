const express = require("express");
const router = express.Router();
const signupLogic = require("../controller/SignupController")

// signup route
router.post("/signup", signupLogic);

module.exports = router;