const mongoose = require("mongoose");

const comment = new mongoose.Schema({
  parent :{ type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  postedByName: { type: String },
  postedByID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  dateTimePosted: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  dislikedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const postSchema = new mongoose.Schema({
  postedByName: { type: String },
  postedByPic: { type: String, default: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" },
  postedByID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number },
  dateTimePosted: { type: String, required: true },
  comments: [comment],
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  dislikedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  buildingName: { type: String, ref: "Building" },
  edited: { tpye: Boolean },
});

const Post = mongoose.model("Post", postSchema);

module.exports = {
  Post,
};
