const mongoose = require("mongoose");

const rating = new mongoose.Schema({
  ratedByID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ratingValue: { type: Number },
});

const buildingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  ratings: [rating],
  averageRating: { type: Number, required: true, default: 0 },
  suggestedByID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lastUpdated: { type: String },
  tags: [String],
  approved: {type: Boolean, default: false},
  suggestedByID: { type: mongoose.Schema.Types.ObjectId, ref: "Building" },
  pic: {
    type: String,
    default:
      "https://www.nicepng.com/png/full/89-898495_house-logo-png-home-address-logo-png.png",
  },
  pic_id: { type: String, default: "" }
});

const Building = mongoose.model("Building", buildingSchema);

module.exports = {
  Building,
};
