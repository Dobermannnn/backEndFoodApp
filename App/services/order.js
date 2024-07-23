const Order = require("../models/order");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  getOrdersByUser: async (id) => {
    const allOrders = await Order.find({ userId: id });
    return allOrders.map((order) => ({
      userId: order.userId,
      restaurantId: order.restaurantId,
      foodOrdered: order.foodOrdered,
      deliveryCost: order.deliveryCost,
      id: order._id
    }));
  },
  addOrder: async (userId, restaurantId, foodOrdered, deliveryCost) => {
    const order = new Order({
      userId,
      restaurantId,
      foodOrdered,
      deliveryCost
    });
    
    await order.save();
    console.log("Order added successfully:", order);
    return order;
  },
  getAllFoodsOfOrder: async (id) => {
    const foods = await Order.aggregate([
      {
        '$match': {
          '_id': new ObjectId(id)
        }
      }, {
        '$unwind': {
          'path': '$foodOrdered'
        }
      }, {
        '$lookup': {
          'from': 'foods', 
          'localField': 'foodOrdered.foodId', 
          'foreignField': '_id', 
          'as': 'foodDetails'
        }
      }, {
        '$unwind': {
          'path': '$foodDetails'
        }
      }, {
        '$project': {
          '_id': 0, 
          'id': '$foodDetails._id', 
          'name': '$foodDetails.name', 
          'restaurantId': '$foodDetails.restaurantId', 
          'price': '$foodDetails.price', 
          'quantity': '$foodOrdered.quantity', 
          'deliveryCost': '$deliveryCost'
        }
      }
    ]);
    return foods;
  }
};
