var express = require("express");
var userRouter = express.Router();
const userController = require("../controllers/userControllers");

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);
userRouter.post("/edit-profile", userController.editProfile);
userRouter.get("/getprofile", userController.getProfile);

module.exports = userRouter;
