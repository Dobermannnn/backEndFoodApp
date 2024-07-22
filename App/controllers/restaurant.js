const {
  getAllRest,
  getRestaurant,
  addRest,
  getRestaurantByTheme,
  getFreeDelivery,
  getAllThemes,
  getRestaurantsSearch,
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
      const restaurant = await getRestaurantByTheme(theme);
      res.json(restaurant);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addRest: async (req, res) => {
    try {
      const { name, addressName, deliveryCost, theme, img } = req.body;
      res.json(addRest(name, addressName, deliveryCost, theme, img));
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getFreeDelivery: async (req, res) => {
    try {
      const restaurants = await getFreeDelivery();
      res.json(restaurants);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getAllRestaurantThemes: async (req, res) => {
    try {
      const themes = await getAllThemes();
      res.json(themes);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getRestByName: async (req, res) => {
    try {
      const searchInput = req.params.searchInput
      const restaurants = await getRestaurantsSearch(searchInput)

      const transformedRestaurants = restaurants.map(({ _id, ...rest }) => ({
            id: _id,
            ...rest
      }));

      res.json(transformedRestaurants)
    }
    catch (err) {
      res.status(500).send(err)
    }
  },
};
