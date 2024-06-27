const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  address: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  createdAt: { type: Date, default: Date.now },
});
const User = model("User", userSchema);
module.exports = User;
