const Restaurant = require("../models/restaurant");

module.exports = {
  getAllRest: async () => {
    const allRests = await Restaurant.find({});
    return allRests.map((rest) => ({
      name: rest.name,
      address: rest.address,
      deliveryCost: rest.deliveryCost,
      img: rest.img,
      theme: rest.theme,
    }));
  },

  getRestaurant: async (id) => {
    const rest = await Restaurant.findOne({ _id: id });
    const { deliveryCost, name, address, img, theme } = rest;
    return {
      name,
      address,
      deliveryCost,
      img,
      theme,
    };
  },
};