var express = require("express");
var adminRouter = express.Router();
const adminController = require("../controllers/adminControllers");

adminRouter.post("/new-admin", adminController.addNewAdmin);
adminRouter.post("/user-to-admin", adminController.userToAdmin);

module.exports = adminRouter;