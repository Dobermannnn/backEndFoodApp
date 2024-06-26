const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const restaurantSchema = new Schema({
  name: String,
  // address: Location,
  address: String,
  deliveryCost: Number,
  theme: String,
  img: String,
});
const Restaurant = model("Restaurant", restaurantSchema);
module.exports = Restaurant;
