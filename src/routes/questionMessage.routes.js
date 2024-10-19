import { Router } from 'express';

import { questionIdValidation } from '../middlewares/global.middleware.js';
import { deleted, index, store, update } from '../controller/questionMessage.controller.js';
import { authChekerMiddleware } from '../middlewares/auth.middleware.js';

const routes = Router();

routes.get('/:id', questionIdValidation, index);

routes.use(authChekerMiddleware);
routes.post('/:id', questionIdValidation, store);
routes.patch('/:id', questionIdValidation, update);
routes.delete('/:id', questionIdValidation, deleted);

export default routes;
