const express = require('express');

const systemController = require('./controllers/systemController');
const roomController = require('./controllers/roomController');
const itemController = require('./controllers/itemController');

const apiRouter = express.Router();

apiRouter.get('/systems', systemController.getSystems);
apiRouter.get('/rooms/:systemId', roomController.getRooms);
apiRouter.get('/:type/:systemId', itemController.getQueryType, itemController.getItems);

module.exports = apiRouter;
