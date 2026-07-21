const express = require("express");
const router = express.Router();
const forgotPass = require("../controller/ForgotPassController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/forgot-pass", forgotPass);

module.exports = router;