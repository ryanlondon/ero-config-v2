require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const systemController = require('./controllers/systemController');
const roomController = require('./controllers/roomController');
const itemController = require('./controllers/itemController');

const PORT = 3000;

const app = express();

// --- Use express middleware ------- //
app.use(bodyParser.json());

// --- Serve static assets ---------- //
app.use(express.static(path.join(__dirname, '../src/')));
app.use(express.static(path.join(__dirname, '../')));

// --- API routes ------------------- //
app.get('/api/systems', systemController.getSystems);
app.get('/api/rooms/:systemId', roomController.getRooms);
app.get('/api/:type/:systemId', itemController.getQueryType, itemController.getItems);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
