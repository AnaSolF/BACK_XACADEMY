const express = require("express");

//Creamos el router para femaleplayers
const femalePlayersRouter = express.Router();
//importar el index controller
const playersController = require("../controllers");


//Ruta Get filtro rn routers por tabla
femalePlayersRouter.get("/:tableName", playersController.getPlayers);

//Ruta Get por tabla y id
femalePlayersRouter.get("/:tableName/:playerId", playersController.getId);



//Se anula con el otro get. PREGUNTAR
//  femalePlayersRouter.get("/name", (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   const name = req.query.name;
//   const resultado= members.filter((res)=>res.name==name)
//   res.send(resultado);
// });

//Exportamos el enrutador
module.exports = femalePlayersRouter;
