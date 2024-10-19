import { Router } from 'express';

import { deleteUser, indexUser, showUser, updateUser } from '../controller/admReqForUser.controller.js';
import { userIdValidation } from '../middlewares/global.middleware.js';

const routes = Router();

routes.get('/', indexUser);
routes.get('/:id', userIdValidation, showUser);
routes.patch('/:id', userIdValidation, updateUser);
routes.delete('/:id', userIdValidation, deleteUser);

export default routes;
