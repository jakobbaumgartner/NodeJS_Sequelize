const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Product = sequelize.define('notes', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false, 
		primaryKey: true
	},
	title: Sequelize.STRING,
	content: Sequelize.STRING
})

module.exports = Product