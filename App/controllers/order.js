const { getOrdersByUser } = require("../services/order");

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
};
