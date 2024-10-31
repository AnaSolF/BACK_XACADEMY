const { SELECT } = require("sequelize/lib/query-types");
const connection = require("../config/dbconnection");

//Volvemos varibale nombre la tabla para pasarla como parámetro en el controller
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

//Sólo lo aplicamos para la tabla news_players
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
// Archivo services - playerServices.js
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

module.exports = {
  getPlayers,
  editPlayer,
  deletePlayer,
  createPlayer,
};
