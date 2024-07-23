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
  },
  getTopSellersRests: async () => {
    const rests = await Order.aggregate([
      {
        '$group': {
          '_id': '$restaurantId', 
          'restaurants': {
            '$first': '$restaurantId'
          }, 
          'count': {
            '$sum': 1
          }
        }
      }, {
        '$sort': {
          'count': -1
        }
      }, {
        '$limit': 3
      }, {
        '$project': {
          '_id': 0, 
          'restaurants': 1
        }
      }, {
        '$lookup': {
          'from': 'restaurants', 
          'localField': 'restaurants', 
          'foreignField': '_id', 
          'as': 'result'
        }
      }, {
        '$unwind': {
          'path': '$result'
        }
      }, {
        '$project': {
          'id': '$result._id', 
          'name': '$result.name', 
          'deliveryCost': '$result.deliveryCost', 
          'theme': '$result.theme', 
          'img': '$result.img', 
          'addressName': '$result.addressName'
        }
      }
    ]);
    return rests;
  },
  getBestSellerThemes: async () => {
    const themes = await Order.aggregate([
      {
        '$lookup': {
          'from': 'restaurants', 
          'localField': 'restaurantId', 
          'foreignField': '_id', 
          'as': 'res'
        }
      }, {
        '$unwind': {
          'path': '$res'
        }
      }, {
        '$group': {
          '_id': '$res.theme', 
          'theme': {
            '$first': '$res.theme'
          }, 
          'count': {
            '$sum': 1
          }
        }
      }, {
        '$sort': {
          'count': -1
        }
      }, {
        '$limit': 3
      }, {
        '$project': {
          '_id': 0, 
          'theme': 1
        }
      }
    ]);
    return themes;
  },
  getUserFavoriteRestaurants: async (id) => {
    const rests = await Order.aggregate([
      {
        '$match': {
          'userId': new ObjectId(id)
        }
      }, {
        '$group': {
          '_id': '$restaurantId', 
          'restaurants': {
            '$first': '$restaurantId'
          }, 
          'count': {
            '$sum': 1
          }
        }
      }, {
        '$sort': {
          'count': -1
        }
      }, {
        '$limit': 3
      }, {
        '$project': {
          '_id': 0, 
          'restaurants': 1
        }
      }, {
        '$lookup': {
          'from': 'restaurants', 
          'localField': 'restaurants', 
          'foreignField': '_id', 
          'as': 'result'
        }
      }, {
        '$unwind': {
          'path': '$result'
        }
      }, {
        '$project': {
          'id': '$result._id', 
          'name': '$result.name', 
          'deliveryCost': '$result.deliveryCost', 
          'theme': '$result.theme', 
          'img': '$result.img', 
          'addressName': '$result.addressName'
        }
      }
    ]);
    return rests;
  }
};
