const express = require("express");
const router = express.Router();
const commentCont = require("../controller/commentCont");
router.post("/comment", commentCont.comment);
router.post("/reply", commentCont.reply);
router.delete("/comment/:id", commentCont.delete);
router.get("/comments", commentCont.get);
router.post("/comment/:id/replies", commentCont.replies);
module.exports = router;
