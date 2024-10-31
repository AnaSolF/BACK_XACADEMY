const express= require("express");
//Creamos el router para maleplayers
const malePlayersRouter = express.Router();

malePlayersRouter.get("/", (req,res)=>{
    res.send("Lista de jugadores")
});

//Exportamos el enrutador
module.exports= malePlayersRouter;