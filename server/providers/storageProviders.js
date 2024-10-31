const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect:'sqlite' 
//   });

// module.exports.sequelize

//providers/storage_providers.js
const sequelize = new Sequelize('sqlite::memory:')
 function get_connection() {
return sequelize
}

module.exports.get_connection=get_connection;