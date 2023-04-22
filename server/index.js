require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectionToDB = require('./database/connection');
const User = require('./database/model/User');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

connectionToDB();

app.get('/', (_req, res) => {
	res.send('Leia o course!');
});

app.post('/register', async ({body: {name, email, password}}, res) => {
	console.log({name, email, password});
	await User.create({
		name,
		email,
		password,
	});
	res.status(200).json({message: 'Usuário criado.'});
});

app.listen(port, () => {
	console.log(`A API está ouvindo na porta ${port}`);
});
