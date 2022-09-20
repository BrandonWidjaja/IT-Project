var express = require("express");
var userRouter = express.Router();
const userController = require("../controllers/userControllers");

// hardcode user (testing)
const User = require("../models/user");

userRouter.post("/new", userController.createUser);
userRouter.get("/getUser", userController.getUser);

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);
userRouter.get("/getprofile", userController.getProfile)


module.exports = userRouter;
