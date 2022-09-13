var express = require("express");
var adminRouter = express.Router();
const userController = require("../controllers/adminControllers");

adminRouter.post("/new-admin", userController.newAdmin);

module.exports = adminRouter;