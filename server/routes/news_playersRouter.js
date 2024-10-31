const express = require("express");

//Creamos el router para femaleplayers
const newsPlayersRouter = express.Router();
const playersController = require("../controllers");


//Ruta Get por nombre de tabla
newsPlayersRouter.get("/:tableName", playersController.getPlayers);

//Ruta Get por tabla y id
newsPlayersRouter.get("/:tableName/:playerId", playersController.getId);

//Ruta Delete
newsPlayersRouter.delete("/:tableName/deletePlayer/:playerId", playersController.deletePlayer);

//Ruta put
newsPlayersRouter.put("/:tableName/editPlayer/:playerId", playersController.editPlayer);

//Ruta Post
newsPlayersRouter.post("/:tableName/createPlayer", playersController.createPlayer);

module.exports = newsPlayersRouter;
