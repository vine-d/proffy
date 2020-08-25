import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();

routes.post('/classes', classesControllers.create)
routes.get('/classes', classesControllers.index)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

routes.post('/users', usersController.create)

routes.post('/authentication', usersController.authentication)

export default routes
