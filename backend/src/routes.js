// Importações
const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikesController = require('./controllers/DislikeController');

const routes = express.Router();



//Rotas -> get
routes.get('/devs', DevController.index);


// ROTAS -> post
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikesController.store);


module.exports = routes;