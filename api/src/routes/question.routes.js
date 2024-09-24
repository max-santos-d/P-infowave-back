import { Router } from "express";

import {
  index,
  show,
  store,
  update,
  deleted,
} from "../controller/question.controller.js";
import { questionIdValidation } from "../middlewares/global.middleware.js";
import { authChekerMiddleware } from "../middlewares/auth.middleware.js";

const routes = Router();

routes.get("/", index);
routes.get("/:id", questionIdValidation, show);

routes.use(authChekerMiddleware);
routes.post("/", store);
routes.patch("/:id", questionIdValidation, update);
routes.delete("/:id", questionIdValidation, deleted);

export default routes;
