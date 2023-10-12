const express = require("express");
const router = express.Router();
const userCont = require("../controller/userCont");
router.get("/", userCont.getUser);
module.exports = router;
