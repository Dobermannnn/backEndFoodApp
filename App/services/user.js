const User = require("../models/user");

module.exports = {
  getAllUsers: async () => {
    const allUsers = await User.find({});
    return allUsers.map((user) => ({
      name: user.name,
      email: user.email,
      address: user.address,
      password: user.password,
      id: user._id
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
  addUser: async (name, password, email, address) => {
    const user = new User({ name, email, password, address });
    await user.save();
    console.log("User added successfully:", user);
    return user;
  },
};
