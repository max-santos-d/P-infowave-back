import { Router } from 'express';

import { indexQuestion, showQuestion, deleteQuestion } from '../controller/admReqForQuestion.controller.js';
import { questionIdValidation } from '../middlewares/global.middleware.js';

const routes = Router();

routes.get('/', indexQuestion);
routes.get('/:id', questionIdValidation, showQuestion);
routes.delete('/:id', questionIdValidation, deleteQuestion);

export default routes;
