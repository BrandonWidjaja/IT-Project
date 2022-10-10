const { Event } = require("../models/event");

const addNewEvent = async (req, res, next) => {
  try {
    // create new event from req
    let today = getDateTime().substring(0,10);
    const newEvent = await new Event(req.body);
    newEvent.dateTimePosted = today;
    await newEvent.save();

    // send new event
    return await res.send(newEvent);
  } catch (e) {
    // send error
    console.error(e);
    return res.send(e);
  }
};

// get a event from their objectID
const getEvent = async (req, res, next) => {
  try {
    // retrieve object id of event from request
    let eventID = req.body._id;

    // find the user in the database
    let exists = await Event.findOne({ _id: eventID });
    if (exists) {
      return res.send(exists);
    }
    // user not found
    return res.send("event does not exist");
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
};

const getDateTime = () => {
  const today = new Date().toLocaleString("en-AU", {timeZone: "Australia/Melbourne"});
  return today;
}

module.exports = { addNewEvent, getEvent};
