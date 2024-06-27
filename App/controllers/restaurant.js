const {
  getAllRest,
  getRestaurant,
  addRest,
  getRestaurantByTheme,
} = require("../services/restaurant");

module.exports = {
  allRestaurants: async (req, res) => {
    try {
      const restaurants = await getAllRest();
      res.json(restaurants);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getRestaurant: async (req, res) => {
    try {
      const id = req.params.id;
      const restaurant = await getRestaurant(id);
      res.json(restaurant);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  getRestaurantByTheme: async (req, res) => {
    try {
      const theme = req.params.theme;
      const restaurant = await getRestaurant(theme);
      res.json(restaurant);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addRest: async (req, res) => {
    try {
      const { name, address, deliveryCost, theme, img } = req.body;
      res.json(addRest(name, address, deliveryCost, theme, img));
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
