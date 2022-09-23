const mongoose = require("mongoose");

const rating = new mongoose.Schema({
  ratedByID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ratingValue: { type: Number },
});

const buildingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  //image: { type: String, required: true },
<<<<<<< Updated upstream
=======
  ratings: [rating],
>>>>>>> Stashed changes
  averageRating: { type: Number, required: true, default: 0 },
  lastUpdated: { type: String },
  tags: [String],
  approved: Boolean,
  suggestedByID: { type: mongoose.Schema.Types.ObjectId, ref: "Building" },
});

const Building = mongoose.model("Building", buildingSchema);

module.exports = {
  Building,
};
