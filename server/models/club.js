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
  pic: { type: String },
  role: { type: String, default: "Club" },
  pic: { type: String, default: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}
});

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;