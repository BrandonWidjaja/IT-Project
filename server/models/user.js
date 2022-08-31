const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

/* User properties */
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //secret: {type: String, required: true},     this can be used later with cookies
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  displayName: { type: String, required: true },
  bio: { Type: String, default: "" },
  birthDate: { Type: String, required: true },
  course: { Type: String },
  posts: [ObjectId],
  //darkMode: { type: Boolean, default: false },    this can be used later for dark mode

  accountType: { type: String, enum: ["Admin", "Public", "Club"] },
  model: { type: mongoose.Schema.Types.ObjectId, refPath: "accountType" },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
