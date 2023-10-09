const express = require("express");
const cors = require("cors");
const app = express();
const connect = require("./conect");

const mongoose = require("mongoose");
app.use(cors());
connect();
const PORT = 5000;
app.use(express.json());
const commScheme = new mongoose.Schema({
  currentUser: {
    image: {
      png: { type: String },
      webp: { type: String },
    },
    username: { type: String },
  },
  comments: [
    {
      id: { type: Number },
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
    },
  ],
});

const Comment = mongoose.model("commentsection", commScheme);

app.get("/comments", async (req, res) => {
  try {
    const comment = await Comment.find();
    res.json(comment);
  } catch (error) {
    console.error("Error retrieving comments:", error);
    res.status(500).json({ message: "Error retrieving comments" });
  }
});

app.post("/comments", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
    console.log({ comment: comment });
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ message: "Error creating comment" });
  }
});
app.listen(PORT, () => {
  console.log("conneccted");
});

module.exports = app;
