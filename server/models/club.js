const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

/* Club properties */
const clubSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //secret: {type: String, required: true},     this can be used later with cookies
  bio: { Type: String, default: "" },
  events: [ObjectId],
  //darkMode: { type: Boolean, default: false },    this can be used later for dark mode
  status: { type: String },
  pic: { type: String }
});

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;