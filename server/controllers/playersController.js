const playerServices = require("../services");
const jwt= require('jsonwebtoken');

//Get players
async function getPlayers(req, res) {
  res.setHeader("Content-Type", "application/json");
  const { tableName } = req.params;
  try {
    const players = await playerServices.getPlayers(tableName);
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//get por id
async function getId(req, res) {
  res.setHeader("Content-Type", "Application/Json");
  const { tableName } = req.params;
  try {
    const players = await playerServices.getPlayers(tableName);
    const playerId = req.params.playerId;
    const resultado = players.filter((resId) => resId.id == playerId);
    await res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//Delete player
async function deletePlayer(req, res) {
  res.setHeader("Content-Type", "application/json");
  const { tableName, playerId } = req.params;
  try {
    const result = await playerServices.deletePlayer(playerId, tableName);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Id: ${playerId} eliminado` });
    } else {
      res.status(404).json({ message: `${playerId} no encontrado` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//Edit player
async function editPlayer(req, res) {
  res.setHeader("Content-Type", "application/json");
  const { tableName, playerId } = req.params;
  const { column, value } = req.body;

  if (!tableName || !playerId || !column || value === undefined) {
    return res.status(400).json({ error: "Faltan parámetros requeridos" });
  }

  try {
    const result = await playerServices.editPlayer(playerId, tableName, column, value);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Registro actualizado` });
    } else {
      res.status(404).json({ message: `${playerId} no encontrado` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//Create player
async function createPlayer(req, res) {
  res.setHeader("Content-Type", "application/json");
  const { tableName } = req.params;
  const playerData = req.body; 
  try {
    const result = await playerServices.createPlayer(tableName, playerData);
    res.status(201).json({ message: `Registro creado con ID ${result.insertId}`, id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  
  try {
    const user = await playerServices.authenticateUser(username, password);
    
    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const payload = { id: user.id, username: user.username };
    const token = jwt.sign(payload, "tu_clave_secreta", { expiresIn: "1h" });

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getPlayers, getId, deletePlayer, editPlayer, createPlayer, login };
