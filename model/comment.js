const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  score: {
    type: Number, // Change to Number type if score represents a numeric value
    required: true,
  },
  user: {
    image: {
      png: { type: String },
      webp: { type: String },
    },
    username: { type: String },
  },
});

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  score: {
    type: Number, // Change to Number type if score represents a numeric value
    required: true,
  },
  user: {
    image: {
      png: { type: String },
      webp: { type: String },
    },
    username: { type: String },
  },
  replies: [replySchema],
});
module.exports = mongoose.model("comments", commentSchema);
