require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./apiRouter');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use('/api', apiRouter);

app.get('/build/bundle.js', (req, res) => res.sendFile(path.join(__dirname, '../build/bundle.js')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../src/')));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
