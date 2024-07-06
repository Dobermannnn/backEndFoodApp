const mongoose = require("mongoose");
const Restaurant = require("./restaurant");
const { Schema, model } = mongoose;

const foodSchema = new Schema({
  name: String,
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  price: Number,
  img: String,
});
const Food = model("Food", foodSchema);
module.exports = Food;
