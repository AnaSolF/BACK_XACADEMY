const express = require("express");

//Creamos el router para femaleplayers
const femalePlayersRouter = express.Router();

//importar el index controller
const playersController = require("../controllers");

//Ruta Get
femalePlayersRouter.get("/", playersController.getPlayers);

//Ruta Get por id
femalePlayersRouter.get("/:playerId", playersController.getId);

//Ruta Delete
femalePlayersRouter.delete(
  "/deletePlayer/:playerId",
  playersController.deletePlayer
);

//Ruta Post
femalePlayersRouter.post("/newFemalePlayer", playersController.createPlayer);

//Ruta PUT
femalePlayersRouter.put("/editPlayer/:playerId", playersController.editPlayer);

//Se anula con el otro get. PREGUNTAR
//  femalePlayersRouter.get("/name", (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   const name = req.query.name;
//   const resultado= members.filter((res)=>res.name==name)
//   res.send(resultado);
// });

//Exportamos el enrutador
module.exports = femalePlayersRouter;
