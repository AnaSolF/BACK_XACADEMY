const { player } = require("../models");
const playerServices= require("../services")
const{members}=require("../models/femalePlayers.json");


//Get players
async function getPlayers(req, res) {
    res.setHeader("Content-Type", "application/json");
    try {
      const players = await playerServices.getPlayers();
      res.json(players);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  

//get por id
async function getId (req, res){
    res.setHeader("Content-Type", "Application/Json");
    try {
    const players= await playerServices.getPlayers();
    const playerId= req.params.playerId;
    const resultado= players.filter((resId)=>resId.id==playerId);
    await res.json(resultado);   
    } catch (error) {
    res.status(500).json({ error: error.message }); 
    }
};

//Delete player
async function deletePlayer(req, res){
    res.setHeader("Content-Type", "Application/Json");
    const playerId = req.params.playerId;
    const resultado= members.filter((resId)=>resId.id==playerId)
    await res.send(`Jugadora eliminada con id ${playerId}`);
    }

//Edit player    
async function editPlayer(req, res){
    res.setHeader("Content-Type", "Application/Json");
    const playerId= req.params.playerId;
    const resultado= members.filter((resId)=>resId.playerId==playerId)
    const {nombre, correo }=req.body;//Datos a editar
   await res.send(resultado)   
}

//Create player
async function createPlayer(req, res){
    await res.setHeader("Content-Type", "Application/Json");
    const {nombre, correo }=req.body;//Objeto completo a postear
    res.send(`¡Hola ${nombre}! Tu correo es ${correo}`);  
}

module.exports= {getPlayers, getId, deletePlayer, editPlayer, createPlayer};