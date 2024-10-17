import { Router } from 'express';

import { index, show, store, update, deleted } from '../controller/post.controller.js';
import { organizerUserValidation, postIdValidation } from '../middlewares/global.middleware.js';
import { authChekerMiddleware } from '../middlewares/auth.middleware.js';

const routes = Router();

routes.get('/', index);
routes.get('/:id', postIdValidation, show);

routes.use(authChekerMiddleware);
routes.post('/', store);
routes.use(organizerUserValidation);
routes.patch('/:id', postIdValidation, update);
routes.delete('/:id', postIdValidation, deleted);

export default routes;
