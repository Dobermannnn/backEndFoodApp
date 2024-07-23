const { getOrdersByUser, addOrder, getAllFoodsOfOrder } = require("../services/order");

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
  }
};
