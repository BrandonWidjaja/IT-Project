const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postedByID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  dateTimePosted: { type: String, required: true },
  comments: [comment],
  likes: { type: Number },
  dislikes: { type: Number },
  buildingID: { type: mongoose.Schema.Types.ObjectId, ref: "Building" },
  edited: { tpye: Boolean },
});

const comment = new mongoose.Schema({
  postedByID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  dateTimePosted: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
});

const Post = mongoose.model("Post", postSchema);

module.exports = {
  Post,
};
