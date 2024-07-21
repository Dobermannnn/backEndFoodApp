const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  createdAt: { type: Date, default: Date.now },
});
const User = model("User", userSchema);
module.exports = User;
