var express = require("express");
var postRouter = express.Router();
const postController = require("../controllers/postControllers");
const Post = require("../models/post");

postRouter.post("/new", postController.addNewPost);
postRouter.get("/getpost", postController.getPost);
postRouter.post("/addcomment", postController.addComment);
postRouter.post("/likeComment", postController.likeComment);
postRouter.post("/dislikeComment", postController.dislikeComment);

module.exports = postRouter;
