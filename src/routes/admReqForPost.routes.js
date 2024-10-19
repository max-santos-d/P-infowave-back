import { Router } from 'express';

import { indexPost, showPost, deletePost } from '../controller/admReqForPost.controller.js';
import { postIdValidation } from '../middlewares/global.middleware.js';

const routes = Router();

routes.get('/', indexPost);
routes.get('/:id', postIdValidation, showPost);
routes.delete('/:id', postIdValidation, deletePost);

export default routes;
