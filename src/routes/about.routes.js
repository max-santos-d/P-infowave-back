import { Router } from 'express';
import { deleted, index, show, store, update } from '../controller/about.controller.js';
import { aboutIdValidation } from '../middlewares/global.middleware.js';

const routes = Router();

routes.get('/', index);
routes.get('/:id', aboutIdValidation, show);

routes.post('/', store);
routes.patch('/:id', aboutIdValidation, update);
routes.delete('/:id', aboutIdValidation, deleted);

export default routes;
