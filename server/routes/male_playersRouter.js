const express= require("express");

const malePlayersRouter = express.Router();

malePlayersRouter.use(express.json());

malePlayersRouter.get("/", (req,res)=>{
    res.send("Lista de jugadores")
});

//Exportamos el enrutador
module.exports.malePlayersRouter= malePlayersRouter;