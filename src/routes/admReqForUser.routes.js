import { Router } from 'express';

import { deleteUser, indexUser, showUser, updateUser } from '../controller/admReqForUser.controller.js';
import { administratorValidation, userIdValidation } from '../middlewares/global.middleware.js';
import { authChekerMiddleware } from '../middlewares/auth.middleware.js';

const routes = Router();

routes.use(authChekerMiddleware);
routes.use(administratorValidation);
routes.get('/', indexUser);
routes.get('/:id', userIdValidation, showUser);
routes.patch('/:id', userIdValidation, updateUser);
routes.delete('/:id', userIdValidation, deleteUser);

export default routes;
