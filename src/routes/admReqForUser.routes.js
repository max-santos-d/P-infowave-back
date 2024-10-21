import { Router } from 'express';

import { deleteUser, indexUser, showUser, updateUser } from '../controller/admReqForUser.controller.js';
import { administratorUserValidation, userIdValidation } from '../middlewares/global.middleware.js';

const routes = Router();

routes.get('/', administratorUserValidation, indexUser);
routes.get('/:id', administratorUserValidation, userIdValidation, showUser);
routes.patch('/:id', administratorUserValidation, userIdValidation, updateUser);
routes.delete('/:id', administratorUserValidation, userIdValidation, deleteUser);

export default routes;
