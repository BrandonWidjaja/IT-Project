const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  postedByClub: { type: String },
  postedByID: { type: mongoose.Schema.Types.ObjectId, ref: "Club" },
  eventName: { type: String, required: true },
  description: { type: String, required: true },
  eventDateTime: { type: String, required: true },
  eventLocation: { type: String, required: true },
  eventLocationName : { type: String },
  dateTimePosted: { type: String, required: true },
  edited: { type: Boolean },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
