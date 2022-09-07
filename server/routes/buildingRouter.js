var express = require("express");
var buildingRouter = express.Router();
const buildingController = require('../controllers/buildingControllers')
const Building = require("../models/building");

buildingRouter.post("/new", buildingController.addNewBuilding);
buildingRouter.get("/getBuilding", buildingController.getBuilding);

module.exports = buildingRouter;
