const mongoose = require("mongoose");
const Restaurant = require("./restaurant");
const { Schema, model } = mongoose;

const foodSchema = new Schema({
  name: String,
  // address: Location,
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
    //ok
  },
  price: Number,
});
const Food = model("Food", foodSchema);
module.exports = Food;
