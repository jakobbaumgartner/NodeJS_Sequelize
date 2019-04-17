const express = require('express');

const sequelize = require('./util/database')
const shrani = require('./models/shrani')

const app = express();

sequelize.sync().then(result => {
	//console.log(result)
}).catch(err => {
	console.log(err)
})

//sync sinhronizira modele in baze

//naredi tabele za vse modele v js datotekah

 app.listen(3000);