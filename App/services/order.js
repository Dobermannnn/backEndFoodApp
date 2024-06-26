const Order = require("../models/order");

module.exports = {
  getOrdersByUser: async (id) => {
    const allOrders = await Order.find({ userId: id });
    return allOrders.map((order) => ({
      userId: order.userId,
      restaurantId: order.restaurantId,
      foodIds: order.foodIds,
    }));
  },
};
