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
  },//ds

  addOrder: async (req, res) => {
    try {
      const { userId, restaurantId, foodOrdered } = req.body;
      const order = await addOrder(userId, restaurantId, foodOrdered);
      res.json(order);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
