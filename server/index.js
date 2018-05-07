const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const os = require('os');

const interfaces = os.networkInterfaces();
const IP = interfaces.en0[3].address;
const PORT = 3000;

const app = express();

// Serve static assets
app.use(express.static(path.join(__dirname, '../src/')));
app.use(express.static(path.join(__dirname, '../')));

app.listen(PORT, () => console.log(`Server listening at http://${IP}:${PORT}`));