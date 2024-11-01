const { SELECT } = require("sequelize/lib/query-types");
const connection = require("../config/dbconnection");
const bcrypt = require("bcryptjs");

//Volvemos variable el nombre la tabla para pasarla como parámetro en el controller
async function getPlayers(tableName) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM ??`;
    connection.query(query, [tableName], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

//Siguientes funciones sólo las aplicamos para las tablas news_players y algunas a users
//Investigué sobre cómo volver variables las queries de mysql
//Delete player
async function deletePlayer(playerId, tableName) {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM ?? WHERE id = ?`;
    connection.query(query, [tableName, playerId], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

// Edit player
async function editPlayer(playerId, tableName, column, value) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE ?? SET ?? = ? WHERE id = ?`;
    connection.query(query, [tableName, column, value, playerId], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

//Create player
async function createPlayer(tableName, playerData) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO ?? SET ?`;
    connection.query(query, [tableName, playerData], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

//Authenticate user 
async function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users WHERE username = ?`;
    connection.query(query, [username], (error, results) => {
      if (error) {
        return reject(error);
      }
      if (results.length > 0) {
        resolve(results[0]); // Devuelve el primer resultado si existe
      } else {
        resolve(null);
      }
    });
  });
}


module.exports = {
  getPlayers,
  editPlayer,
  deletePlayer,
  createPlayer,
  authenticateUser
};
