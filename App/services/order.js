const Order = require("../models/order");

module.exports = {
  getOrdersByUser: async (id) => {
    const allOrders = await Order.find({ userId: id });
    return allOrders.map((order) => ({
      userId: order.userId,
      restaurantId: order.restaurantId,
      foodOrdered: order.foodOrdered,
    }));
  },
  addOrder: async (userId, restaurantId, foodOrdered) => {
    const order = new Order({
      userId,
      restaurantId,
      foodOrdered,
    });
    
    await order.save();
    console.log("Order added successfully:", order);
    return order;
  },
};
