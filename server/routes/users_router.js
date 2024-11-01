const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");

const playersController = require("../controllers");

//Traer todos los usuarios
usersRouter.get("/:tableName", playersController.getPlayers);

//Filtrar usuario por id
// usersRouter.get("/:tableName/:playerId", playersController.getId);
usersRouter.post("/login", playersController.login);

//Crear usuario
usersRouter.post("/:tableName/createUser", playersController.createPlayer);

//delete usuario
usersRouter.delete("/:tableName/deleteUser/:playerId", playersController.deletePlayer);

//Edit usuario
usersRouter.put("/:tableName/editUser/:playerId", playersController.editPlayer);



module.exports= usersRouter;