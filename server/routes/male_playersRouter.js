const express= require("express");
//Creamos el router para maleplayers
const malePlayersRouter = express.Router();
const playersController = require("../controllers");

//Ruta Get por nombre de tabla
malePlayersRouter.get("/:tableName", playersController.getPlayers);

//Ruta Get por male player tabla y ID
malePlayersRouter.get("/:tableName/:playerId", playersController.getId);

//Exportamos el enrutador
module.exports= malePlayersRouter;