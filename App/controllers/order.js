const { getOrdersByUser, addOrder, getAllFoodsOfOrder, getTopSellersRests, getBestSellerThemes, getUserFavoriteRestaurants } = require("../services/order");

module.exports = {
  getOrdersByUser: async (req, res) => {
    try {
      const id = req.params.id;
      const orders = await getOrdersByUser(id);
      res.json(orders);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  addOrder: async (req, res) => {
    try {
      const { userId, restaurantId, foodOrdered, deliveryCost } = req.body;
      const order = await addOrder(userId, restaurantId, foodOrdered, deliveryCost);
      res.json(order);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getFoodsFromOrder: async (req, res) => {
    try {
      const id = req.params.id;
      const foods = await getAllFoodsOfOrder(id);
      res.json(foods);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getTopRestaurants: async (req, res) => {
    try {
      const topRest = await getTopSellersRests();
      res.json(topRest);
    } catch(err) {
      res.status(500).send(err);
    }
  },
  getBestThemes: async (req, res) => {
    try {
      const themes = await getBestSellerThemes();
      res.json(themes);
    } catch(err) {
      res.status(500).send(err);
    }
  },
  getFavoriteOfUser: async (req, res) => {
    try {
      const id = req.params.id;
      const rests = await getUserFavoriteRestaurants(id);
      res.json(rests);
    } catch(e) {
      res.status(500).send(err);
    }
  }
};
