const { getOrdersByUser, addOrder } = require("../services/order");

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
      const { userId, restId, foodIds, quantity } = req.body;
      const order = await addOrder(userId, restId, foodIds, quantity);
      res.json(order);
    } catch (err) {
      json.status(500).res(err);
    }
  },
};
