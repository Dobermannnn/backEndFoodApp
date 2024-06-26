const { getAllUsers, getUser, addUser } = require("../services/user");

module.exports = {
  listUsers: async (req, res) => {
    try {
      const users = await getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getUser: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await getUser(id);
      res.json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addUser: async (req, res) => {
    try {
      const { name, password, email, address } = req.body;
      res.json(addUser(name, password, email, address));
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
