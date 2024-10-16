import { Router } from 'express';
import { questionIdValidation } from '../middlewares/global.middleware.js';
import { index, update } from '../controller/questionLike.controller.js';
import { authChekerMiddleware } from '../middlewares/auth.middleware.js';

const routes = Router();

routes.use(authChekerMiddleware);
routes.get('/', index);
routes.patch('/:id', questionIdValidation, update);

export default routes;
