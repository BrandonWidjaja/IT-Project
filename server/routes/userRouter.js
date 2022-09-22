var express = require("express");
var userRouter = express.Router();
const userController = require("../controllers/userControllers");

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);
userRouter.post("/edit-profile/:email", userController.editProfile);
userRouter.get("/getprofile/:email", userController.getProfile);

module.exports = userRouter;
