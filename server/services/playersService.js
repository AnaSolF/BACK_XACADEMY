const { SELECT } = require("sequelize/lib/query-types");
const connection = require("../config/dbconnection");

async function getPlayers() {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM female_players", (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

// async function getIdPlayer(){
//   connection.query("SELECT id FROM female_players", (error, results) => {
//     if (error) {
//       throw error;
//     }
//       results.forEach((result) => {
//        console.log(result);
//       });
    
//   });
// }

async function EditPlayer() {
 connection.query("DELETE")
}

async function DeletePlayer() {
  console.log("Borrando datos");
}

async function createPlayer() {
  console.log("Creando datos");
}

module.exports = {
  getPlayers,
  EditPlayer,
  DeletePlayer,
  createPlayer
};
