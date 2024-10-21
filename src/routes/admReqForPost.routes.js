import { Router } from 'express';

import { indexPost, showPost, deletePost } from '../controller/admReqForPost.controller.js';
import { administratorUserValidation, postIdValidation } from '../middlewares/global.middleware.js';

const routes = Router();

routes.get('/', administratorUserValidation, indexPost);
routes.get('/:id', administratorUserValidation, postIdValidation, showPost);
routes.delete('/:id', administratorUserValidation, postIdValidation, deletePost);

export default routes;
