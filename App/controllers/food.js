const { getFoodById, getFoodByRest } = require("../services/food");

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
};
