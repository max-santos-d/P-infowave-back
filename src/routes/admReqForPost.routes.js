import { Router } from 'express';

import { indexPost, showPost, deletePost, clearReport } from '../controller/admReqForPost.controller.js';
import { administratorValidation, postIdValidation } from '../middlewares/global.middleware.js';
import { authChekerMiddleware } from '../middlewares/auth.middleware.js';

const routes = Router();

routes.use(authChekerMiddleware);
routes.use(administratorValidation);
routes.get('/', indexPost);
routes.get('/:id', postIdValidation, showPost);
routes.patch('/:id', postIdValidation, clearReport);
routes.delete('/:id', postIdValidation, deletePost);

export default routes;
