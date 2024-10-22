import { Router } from 'express';

import { indexQuestion, showQuestion, deleteQuestion } from '../controller/admReqForQuestion.controller.js';
import { administratorValidation, questionIdValidation } from '../middlewares/global.middleware.js';
import { authChekerMiddleware } from '../middlewares/auth.middleware.js';

const routes = Router();

routes.use(authChekerMiddleware);
routes.use(administratorValidation);
routes.get('/', indexQuestion);
routes.get('/:id', questionIdValidation, showQuestion);
routes.delete('/:id', questionIdValidation, deleteQuestion);

export default routes;
