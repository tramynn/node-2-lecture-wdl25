const users = require("./users");

// Begin Group 3
const getUsers = (req, res) => {
  if (req.query.first_name) {
    const filteredUsers = users.filter(
      user => user.first_name.toLowerCase().indexOf(req.query.first_name) !== -1
    );
    return res.json(filteredUsers);
  }
  return res.json(users);
};
// End Group 3

// where does -1 come from

// Begin Group 4
const getUserById = (req, res) => {
  const user = users.find(user => user.id === +req.params.id);
  if (!user) {
    return res.status(404).json("No user found");
  } else {
    res.json(user);
  }
};
// End Group 4

// Begin Group 5
module.exports = {
  getUsers: getUsers,
  getUserById: getUserById
};
// End Group 5
