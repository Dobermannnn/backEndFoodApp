const User = require("../models/user");

module.exports = {
  getAllUsers: async () => {
    const allUsers = await User.find({});
    return allUsers.map((user) => ({
      name: user.name,
      email: user.email,
      address: user.address,
    }));
  },

  getUser: async (id) => {
    const user = await User.findOne({ _id: id });
    const { name, email, address } = user;
    return {
      name,
      email,
      address,
    };
  },
};
