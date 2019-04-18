const express = require('express');
const pug = require('pug')
const bodyParser = require('body-parser')

const sequelize = require('./util/database')
const shrani = require('./models/shrani')

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }))

sequelize.sync().then(result => {
	//console.log(result)
}).catch(err => {
	console.log(err)
})

//sync sinhronizira modele in baze

//naredi tabele za vse modele v js datotekah

app.get('/', (req, res) => {
	res.render('../view/index.pug');
});

app.post('/', (req, res) => {
	shrani.create({
		title: req.body.something
	})
	.then(result => {console.log(result)})
	.catch(err => {
		console.log(err)
	})
});


 app.listen(3000);