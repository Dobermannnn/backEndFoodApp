const Restaurant = require("../models/restaurant");

module.exports = {
  getAllRest: async () => {
    const allRests = await Restaurant.find({});
    return allRests.map((rest) => ({
      name: rest.name,
      addressName: rest.addressName,
      address: rest.address,
      deliveryCost: rest.deliveryCost,
      img: rest.img,
      theme: rest.theme,
    }));
  },

  getRestaurant: async (id) => {
    const rest = await Restaurant.findOne({ _id: id });
    const { deliveryCost, name, addressName ,address, img, theme } = rest;
    return {
      name,
      addressName,
      address,
      deliveryCost,
      img,
      theme,
    };
  },
  getRestaurantByTheme: async (theme) => {
    let allRests;
    if(theme == "All")
      allRests = await Restaurant.find();
    else
      allRests = await Restaurant.find({ theme: theme });

    return allRests.map((rest) => ({
      name: rest.name,
      addressName: rest.addressName,
      address: rest.address,
      deliveryCost: rest.deliveryCost,
      img: rest.img,
      theme: rest.theme,
    }));
  },

  addRest: async (name, addressName ,address, deliveryCost, theme, img) => {
    const restaurant = new Restaurant({
      name,
      addressName,
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
      addressName: rest.addressName,
      address: rest.address,
      deliveryCost: rest.deliveryCost,
      img: rest.img,
      theme: rest.theme,
    }));
  },
  getAllThemes: async () => {
    const allThemes = await Restaurant.aggregate([
      {
        '$group': {
          '_id': null, 
          'themes': {
            '$addToSet': '$theme'
          }
        }
      }, {
        '$project': {
          '_id': 0, 
          'themes': 1
        }
      }
    ]);
    return allThemes[0].themes;
  },
  getRestaurantsSearch: async (searchInput) => {
    if(searchInput.length < 1)
      return [];

    const regex = new RegExp(searchInput, 'i');
    const restaurants = await Restaurant.aggregate([
      {
        $match: {
          name: {
            $regex: regex
          }
        }
      }
    ]);

    return restaurants;
  }
};
