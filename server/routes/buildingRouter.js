var express = require("express");
var buildingRouter = express.Router();

const buildingController = require("../controllers/buildingControllers");

buildingRouter.post("/addBuilding", buildingController.addNewBuilding);
buildingRouter.get("/buildings", buildingController.getBuildings);

buildingRouter.get(
  "/building-detail/:name",
  buildingController.getBuildingDetail
);
buildingRouter.post("/edit-building/:name", buildingController.editBuilding);
buildingRouter.get("/addTag/:name", buildingController.addTag);
buildingRouter.get("/removeTag/:name", buildingController.removeTag);
buildingRouter.post("/rate-building", buildingController.rateBuilding);

module.exports = buildingRouter;
