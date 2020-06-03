import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// index, show, create/store, update, delete/destroy <-- Padrão de Controllers

const routes = express.Router();
const pointsController = new PointsController;
const itemsController = new ItemsController;

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);

export default routes;


// Outras possíveis lógicas para abstração:
// Service Pattern
// Repository Patten (Data Mapper)