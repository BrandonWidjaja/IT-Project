var express = require("express");
var adminRouter = express.Router();
const adminController = require("../controllers/adminControllers");

adminRouter.post("/new-admin", adminController.addNewAdmin);
adminRouter.post("/user-to-admin", adminController.userToAdmin);
adminRouter.post("/ban-user", adminController.banUser);
adminRouter.delete("/delete-building", adminController.deleteBuilding);
adminRouter.delete("/delete-post", adminController.deletePost);
adminRouter.post("/approve", adminController.approveBuilding);


module.exports = adminRouter;