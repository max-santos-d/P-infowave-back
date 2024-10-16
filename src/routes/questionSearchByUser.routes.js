import { Router } from 'express';

import { authChekerMiddleware } from '../middlewares/auth.middleware.js';
import { index } from '../controller/questionSearchByUser.controller.js';

const routes = Router();

routes.use(authChekerMiddleware);
routes.get('/', index);

export default routes;
