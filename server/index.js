require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const projectController = require('./controllers/projectController');
const roomController = require('./controllers/roomController');

const PORT = 3000;

const app = express();

// --- Use express middleware ------- //
app.use(bodyParser.json());

// --- Serve static assets ---------- //
app.use(express.static(path.join(__dirname, '../src/')));
app.use(express.static(path.join(__dirname, '../')));

// --- API routes ------------------- //
app.get('/api/projects/all', projectController.getAllProjects);
app.get('api/rooms', roomController.getRooms);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
