import { Router } from 'express';

import { postIdValidation, questionIdValidation, userIdValidation } from '../middlewares/global.middleware.js';
import { postReport, questionReport, userReport } from '../controller/report.controller.js';
import { authChekerMiddleware } from '../middlewares/auth.middleware.js';

const routes = Router();

routes.use(authChekerMiddleware);
routes.patch('/user/:id', userIdValidation, userReport);
routes.patch('/post/:id', postIdValidation, postReport);
routes.patch('/question/:id', questionIdValidation, questionReport);

export default routes;
