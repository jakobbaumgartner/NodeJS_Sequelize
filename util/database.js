// tokrat namesto sql pool uporabimo sequelize, mysql2 še vedno potrebujemo

//v tej datoteki povežemo bazo 

const Sequelize = require('sequelize')

const sequelize = new Sequelize('nodejs_db', 'root','brun13cajt', {dialect: 'mysql', host: 'localhost'} )
//nov sequelize objekt- dobimo connection pool, z dodatnimi funkcijami

module.exports = sequelize