const Food = require("../models/food");

module.exports = {
  getFoodById: async (id) => {
    const rest = await Food.findOne({ _id: id });
    const { name, price, img } = rest;
    return {
      name,
      price,
      img,
    };
  },

  getFoodByRest: async (id) => {
    const food = await Food.find({ restaurantId: id });
    const { name, price, img } = food;
    return {
      name,
      price,
      img,
    };
  },

  addFood: async (name, restaurantId, price, img) => {
    const food = new Food({
      name,
      restaurantId,
      price,
      img,
    });
    await food.save();
    console.log("Food added successfully:", food);
    return food;
  },
};
