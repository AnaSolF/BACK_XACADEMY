// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/dbConfig");

// const player = sequelize.define(
//   "player",
//   {
//     playerId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       unique: true
//     }
//   },
//   {
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//   },
//   {
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     }
//   }
// );
// // `sequelize.define` also returns the model
// console.log(player === sequelize.models.player); // true
// module.exports = { player };
