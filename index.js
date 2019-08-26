const express = require("express");
const userController = require("./controllers/userController");
const catController = require("./controllers/catController");
const app = express();
const PORT = 5050;

app.get("/api/users", userController.getUsers);
app.get("/api/users/:id", userController.getUserById);
app.get("/api/cats", catController.getCats);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
