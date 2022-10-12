var express = require("express");
var clubRouter = express.Router();
const clubController = require("../controllers/clubControllers");

clubRouter.post("/login", clubController.login);
clubRouter.post("/register", clubController.register);
clubRouter.post("/edit-profile/:email", clubController.editProfile);
clubRouter.get("/getprofile/:email", clubController.getProfile);

module.exports = clubRouter;