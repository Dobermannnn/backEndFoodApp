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
  getRestaurantByTheme: async (theme) => {
    const allRests = await Restaurant.find({ theme: theme });
    return allRests.map((rest) => ({
      name: rest.name,
      address: rest.address,
      deliveryCost: rest.deliveryCost,
      img: rest.img,
      theme: rest.theme,
    }));
  },

  addRest: async (name, address, deliveryCost, theme, img) => {
    const restaurant = new Restaurant({
      name,
      address,
      deliveryCost,
      theme,
      img,
    });
    await restaurant.save();
    console.log("restaurant added successfully:", restaurant);
    return restaurant;
  },
  getFreeDelivery: async () => {
    const allRests = await Restaurant.find({ deliveryCost: 0 });
    return allRests.map((rest) => ({
      name: rest.name,
      address: rest.address,
      deliveryCost: rest.deliveryCost,
      img: rest.img,
      theme: rest.theme,
    }));
  },
};
