const { getFoodById, getFoodByRest, addFood } = require("../services/food");

module.exports = {
  getFoodOfRest: async (req, res) => {
    try {
      const id = req.params.id;
      const food = await getFoodByRest(id);
      res.json(food);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getFoodById: async (req, res) => {
    try {
      const id = req.params.id;
      const food = await getFoodById(id);
      res.json(food);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addFood: async (req, res) => {
    try {
      const { name, restaurantId, price, img } = req.body;
      const food = await addFood(name, restaurantId, price, img);
      res.json(food);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
