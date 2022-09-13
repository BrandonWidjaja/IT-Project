const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const bcrypt = require("bcryptjs");

/* User properties */
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //secret: {type: String, required: true},     this can be used later with cookies
  lastName: { type: String},
  firstName: { type: String },
  displayName: { type: String, required: true },
  bio: { Type: String, default: "" },
  birthDate: { Type: String },
  course: { Type: String },
  posts: [ObjectId],
  //darkMode: { type: Boolean, default: false },    this can be used later for dark mode
  role: { type: String },
  model: { type: mongoose.Schema.Types.ObjectId, refPath: "accountType" },
});



/*
userSchema.methods.verifyPassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, valid) => {
    callback(err, valid);
  });
};

const SALT_FACTOR = 15;

userSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.hash(user.password, SALT_FACTOR, (err, hash) => {
    if (err) {
      return next(err);
    }
    // Replace password with hash
    user.password = hash;
    next();
  });
}); */

const User = mongoose.model("User", userSchema);

module.exports = User;
