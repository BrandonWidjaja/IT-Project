var express = require("express");
var eventRouter = express.Router();
const eventController = require("../controllers/eventControllers");
const Event = require("../models/event");

eventRouter.post("/new", eventController.addNewEvent);
eventRouter.get("/getevent", eventController.getEvent);

module.exports = eventRouter;
