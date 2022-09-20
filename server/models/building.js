const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  //image: { type: String, required: true },
  rating: { type: Number, required: true, default: 5 },
  lastUpdated: { type: String },
  tags: [String],
  approved: Boolean,
  suggestedByID: { type: mongoose.Schema.Types.ObjectId, ref: "Building" },
});

const Building = mongoose.model("Building", buildingSchema);

module.exports = {
  Building,
};
