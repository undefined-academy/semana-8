var express = require('express');
var postRouter = express.Router();
var crypto = require('crypto');
var postModel = require('../models/postModel.js');

// Read All
postRouter.get('/', async function (req, res, next) {
  const posts = await postModel.find({}).sort({ date: -1 }).limit(5);
  res.status(200).json({ posts });
});

// Read One
postRouter.get("/:id", async (req, res) => {
  const post = await postModel.findOne({ _id: req.params.id });
  res.status(200).json({ post });
});

// Create
postRouter.post("/", async (req, res) => {
  const permalink = crypto.randomBytes(16).toString("base64Url");
  const date = new Date().toISOString();
  const postToSave = { ...req.body, date, permalink };
  console.log(postToSave);
  const createdPost = await postModel.create(postToSave); // create: mongoose ODM method
  res.status(201).json({ post: createdPost });
});

// Update
postRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const updatedPost = await postModel
    .findOneAndUpdate({ _id: id }, data, { new: true, });

  res.status(200).json({ post: updatedPost });
});

// Delete
postRouter.delete("/:id", async (req, res) => {
  const deletedPost = await postModel.findOneAndDelete({
    _id: req.params.id,
  });
  res.status(200).json({ post: deletedPost });
});

module.exports = postRouter;
