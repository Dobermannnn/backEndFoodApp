const { getAllRest, getRestaurant } = require("../services/restaurant");

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
};
