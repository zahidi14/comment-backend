const mongoose = require("mongoose");
const commScheme = new mongoose.Schema({
  content: { type: String },
  createdAt: { type: String },
  score: { type: Number },
  user: {
    image: {
      png: { type: String },
      webp: { type: String },
    },
    username: { type: String },
  },
  replies: [
    {
      content: { type: String },
      createdAt: { type: String },
      score: { type: Number },
      replyingTo: { type: String },
      user: {
        image: {
          png: { type: String },
          webp: { type: String },
        },
        username: { type: String },
      },
    },
  ],
});
module.exports = commScheme;
