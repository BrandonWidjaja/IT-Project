var express = require("express");
var eventRouter = express.Router();
const eventController = require("../controllers/eventControllers");

eventRouter.get("/getevent", eventController.getEvent);
eventRouter.get("/getbuildingevent/:name", eventController.getBuildingEvent);
eventRouter.post("/new", eventController.addNewEvent);
eventRouter.delete("/delete-event", eventController.deleteEvent);

module.exports = eventRouter;
