const mongoose = require("mongoose");
const Restaurant = require("./restaurant");
const User = require("./user");
const Food = require("./food");
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Restaurant,
    required: true,
  },
  foodIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Food,
      required: true,
    },
  ],
  quantity: [
    {
      type: Number,
      required: true,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});
const Order = model("Order", orderSchema);
module.exports = Order;
