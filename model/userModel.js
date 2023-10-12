const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const currentUser = new Schema({
  image: {
    png: { type: String },
    webp: { type: String },
  },
  username: { type: String },
});

module.exports = mongoose.model("currentUser", currentUser);
