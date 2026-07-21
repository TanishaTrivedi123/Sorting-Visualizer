const express = require("express")
const router = express.Router();
const resetPass = require("../controller/resetPassController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/reset-pass/:token", resetPass)

module.exports = router;