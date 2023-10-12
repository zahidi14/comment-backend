const express = require("express");
const comment = require("../model/comment");

exports.comment = async (req, res, next) => {
  try {
    const { content, createdAt, score, user, replies } = req.body;
    const repliesArray = Array.isArray(replies) ? replies : [];
    const send = new comment({
      content: content,
      createdAt: createdAt,
      score: score,
      user: user,
      replies: repliesArray,
    });
    await send
      .save()
      .then((result) => {
        res.status(201).json({ message: "posted successfully", data: result });
      })
      .catch((err) => {
        console.log("eroor", err);
        next(err);
      });
  } catch (err) {
    console.log("error comment");
  }
};

exports.reply = async (req, res, next) => {
  try {
    const commentId = req.params.commentId;

    const { content, createdAt } = req.body;

    await comment
      .findById(commentId)
      .then((post) => {
        post.content = content;
        post.createdAt = createdAt;

        return post.save();
      })
      .then((result) => {
        res.status(200).json({
          message: "updated successfully",
          data: result,
        });
      })
      .catch((err) => {
        console.log("eroorrrr", err);
      });
  } catch (err) {
    console.log("error comment");
  }
};

exports.get = (req, res, next) => {
  try {
    comment
      .find()
      .then((result) => {
        res.status(200).json({
          message: "data fetched successfully ",
          data: result,
        });
      })
      .catch((err) => {
        console.log("error fetch data ", err);
      });
  } catch (error) {
    console.log(" error get");
  }
};

exports.replies = async (req, res, next) => {
  const commentId = req.params.id;
  try {
    const rep = await comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({
        message: "comment not found",
      });
    }
    const { content, createdAt, score, user } = req.body;
    const reply = {
      content,
      createdAt,
      score,
      user,
    };
    rep.replies.push(reply);
    const updatedComment = await rep.save();
    res.status(201).json({
      message: "reply added",
      data: updatedComment,
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    await comment
      .findByIdAndDelete(id)
      .then(() => {
        res.status(201).json({
          message: "data deleted",
        });
      })
      .catch((err) => {
        console.log("error deleting", err);
      });
    next();
  } catch (error) {
    console.log("deleting error", error);
  }
};
