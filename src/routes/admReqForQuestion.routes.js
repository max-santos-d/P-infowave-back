import { Router } from 'express';

import { indexQuestion, showQuestion, deleteQuestion } from '../controller/admReqForQuestion.controller.js';
import { administratorUserValidation, questionIdValidation } from '../middlewares/global.middleware.js';

const routes = Router();

routes.get('/', administratorUserValidation, indexQuestion);
routes.get('/:id', administratorUserValidation, questionIdValidation, showQuestion);
routes.delete('/:id', administratorUserValidation, questionIdValidation, deleteQuestion);

export default routes;
