const Food = require("../models/food");

module.exports = {
  getFoodById: async (id) => {
    const rest = await Food.findOne({ _id: id });
    const { name, price } = rest;
    return {
      name,
      price,
    };
  },

  getFoodByRest: async (id) => {
    const food = await Food.find({ restaurantId: id });
    const foodDetails = food.map(item => ({
        name: item.name,
        price: item.price,
        id: item._id
    }));

    return foodDetails;
  },

  addFood: async (name, restaurantId, price) => {
    const food = new Food({
      name,
      restaurantId,
      price,
    });
    await food.save();
    console.log("Food added successfully:", food);
    return food;
  },
};
