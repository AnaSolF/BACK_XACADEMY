const express = require("express");
// const db= require("../db")
const axios= require("axios");
// const { db }= require("../db/db")
//Creamos el router para players
const femalePlayersRouter = express.Router();

//Creamos instancia de la base de datos

femalePlayersRouter.use(express.json());

//Get
femalePlayersRouter.get("/", (req, res) => {
  res.send("Lista de jugadoras");
});

//get por id
femalePlayersRouter.get("/:playerId", (req, res)=>
{
  const playerId= req.params.playerId;
  res.send({id:playerId});
}
);



// femalePlayersRouter.post("/newPlayer", (req, res)=>{
//   const {nombre, email} = req.body;
//   res.send(newPlayer);
// }
// )


//Exportamos el enrutador
module.exports.femalePlayersRouter = femalePlayersRouter;
