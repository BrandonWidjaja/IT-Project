var express = require("express");
var userRouter = express.Router();
const userController = require("../controllers/userControllers");

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);
userRouter.post("/new", userController.createUser);
userRouter.get("/getUser", userController.getUser);

module.exports = userRouter;
