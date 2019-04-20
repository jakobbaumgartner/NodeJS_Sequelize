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

app.use('/delete/', (req, res) => {
	console.log(req.body.id0)

	shrani.findAll({where: {
		title: req.body.id0
	} })
	.then(result => {
		result[0].destroy()
	})
	.then(result => {
		 res.redirect('/');
	})
});

app.get('/', (req, res) => {



	shrani.findAll().then(result => {
		console.log(result.length)
		
		//nasleden del MORA!!! biti v then(), ker drugače izvajanje prehiti pridobitev vrednosti (asinhronost) in je neuspešno
		res.render('../view/index.pug', {numberofelements: result.length, elementtitle: result})

		});
	})

	// findByPk nam poišče in vrne le en "primary key" - le en element



app.post('/', (req, res) => {
	shrani.create({
		title: req.body.something
	})
	.then(result => {
		console.log(result)
		 res.redirect('/');
	})
	.catch(err => {
		console.log(err)
	})
});


 app.listen(3000);