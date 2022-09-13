var express = require("express");
var buildingRouter = express.Router();
const buildingController = require("../controllers/buildingControllers");

buildingRouter.post("/addBuilding", buildingController.addNewBuilding);
// buildingRouter.get("/buildings", buildingController.getBuilding);

module.exports = buildingRouter;
