const users = require("./users");

const getUsers = (req, res) => {
  if (req.query.first_name) {
    const filteredUsers = users.filter(
      user => user.first_name.toLowerCase().indexOf(req.query.first_name) !== 1
    );
    return res.json(filteredUsers);
  }
  return res.json(users);
};

const getUser = (req, res) => {
  const user = users.find(user => user.id === +req.params.id);
  if (!user) {
    return res.status(404).json("No user found");
  } else {
    res.json(user);
  }
};

module.exports = {
  getUsers: getUsers,
  getUser: getUser
};
