var express = require("express");
var postRouter = express.Router();
const postController = require("../controllers/postControllers");
const Post = require("../models/post");


postRouter.get("/getpost/:name", postController.getPost);
postRouter.get("/getuserpost/:id", postController.getUserPost);
postRouter.get("/checkliked/:id/:user", postController.hasBeenLiked);
postRouter.get("/checkdisliked/:id/:user", postController.hasBeenDisliked);
postRouter.post("/new", postController.addNewPost);
postRouter.post("/addcomment", postController.addComment);
postRouter.post("/likeComment", postController.likeComment);
postRouter.post("/dislikeComment", postController.dislikeComment);
postRouter.post("/likepost", postController.likePost);
postRouter.post("/dislikepost", postController.dislikePost);


module.exports = postRouter;
