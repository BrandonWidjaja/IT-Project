const mongoose = require("mongoose");

const comment = new mongoose.Schema({
  postedByID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  dateTimePosted: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  likedBy: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
  dislikedBy: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
});

const postSchema = new mongoose.Schema({
  postedByName: { type: String },
  postedByID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number },
  dateTimePosted: { type: String, required: true },
  comments: [comment],
  likes: { type: Number },
  dislikes: { type: Number },
  buildingName: { type: String, ref: "Building" },
  edited: { tpye: Boolean },
});

const Post = mongoose.model("Post", postSchema);

module.exports = {
  Post,
};
