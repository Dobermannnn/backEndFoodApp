const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const restaurantSchema = new Schema({
  name: String,
  deliveryCost: Number,
  theme: String,
  img: String,
  addressName: String,
});
const Restaurant = model("Restaurant", restaurantSchema);
module.exports = Restaurant;
