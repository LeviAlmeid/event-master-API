const express = require('express');
const UserController = require('./controllers/UserController');
const EventController = require('./controllers/EventController');

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.post("/users/:user_id/event", EventController.store);
routes.get("/users/:user_id/event", EventController.index);
routes.get("/event", EventController.findAll);



module.exports = routes;