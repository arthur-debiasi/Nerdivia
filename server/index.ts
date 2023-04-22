import 'dotenv/config';
// Import cors from 'cors';
import connectionToDB from './database/connection';

import express, {type Application} from 'express';

const app: Application = express();
const port = 3001;

connectionToDB()
	.then(() => {
		console.log('MongoDB connected');
	})
	.catch(err => {
		console.log(err);
	});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
