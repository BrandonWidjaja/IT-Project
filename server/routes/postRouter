var express = require("express");
var postRouter = express.Router();
const postController = require("../controllers/postControllers");
const Post = require("../models/post");

postRouter.post("/new", postController.addNewPost);
postRouter.get("/getpost", postController.getPost);

module.exports = postRouter;
