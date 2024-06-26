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
    const rest = await Food.find({ restaurantId: id });
    const { name, price, img } = rest;
    return {
      name,
      price,
      img,
    };
  },
};
