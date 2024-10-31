const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  Database: "BACK_XACADEMY",
  user: "root",
  password: "",
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("CONEXION EXITOSA");
  }
});

connection.query('use BACK_XACADEMY', (error, results, fields) => {
  if (error) {
    throw error;
  } 
console.log('usando BACK_XACADEMY');
}); 

// connection.query(
//   "SELECT * from female_players", (error, results, fields) => {
//   if (error) {
//     throw error;
//   }
//     results.forEach((result) => {
//       console.log(result);
//     });
  
// }
// )

// connection.query("SELECT * from male_players", (error, results, fields) => {
//   if (error) {
//     throw error;
//   }
//     results.forEach((result) => {
//       console.log(result);
//     });
  
// });

// connection.end();

module.exports=connection;