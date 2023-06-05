const mongoose = require("mongoose");
const Comment = (com) => mongoose.model("Comment", com);

module.exports = Comment;
