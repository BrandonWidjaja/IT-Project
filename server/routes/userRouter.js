var express = require("express");
var userRouter = express.Router();
const userController = require("../controllers/userControllers");

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);
userRouter.post("/edit-profile/:id", userController.editProfile);
userRouter.get("/getprofile/:id", userController.getProfile);

module.exports = userRouter;
