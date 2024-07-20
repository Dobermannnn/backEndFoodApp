const Order = require("../models/order");

module.exports = {
  getOrdersByUser: async (id) => {
    const allOrders = await Order.find({ userId: id });
    return allOrders.map((order) => ({
      userId: order.userId,
      restaurantId: order.restaurantId,
      foodIds: order.foodIds,
      quantity: order.quantity,
    }));
  },
  addOrder: async (userId, restId, foodIds, quantity) => {
    const order = new Order({
      userId,
      restId,
      foodIds,
      quantity,
    });
    await order.save();
    console.log("Order added successfully:", order);
    return order;
  },
};
