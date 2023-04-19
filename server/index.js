require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Leia o course!');
});

app.post('/queryData', ({body}, res) => res.status(200).json(body));

app.listen(port, () => {
  console.log(`A API está ouvindo na porta ${port}`);
});