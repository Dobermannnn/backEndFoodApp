const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const restaurantSchema = new Schema({
  name: String,
  deliveryCost: Number,
  theme: String,
  img: String,
  addressName: String,
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
});
const Restaurant = model("Restaurant", restaurantSchema);
module.exports = Restaurant;
