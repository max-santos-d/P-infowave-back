import { Router } from "express";

import {
  index,
  show,
  store,
  update,
  deleted,
} from "../controller/question.controller.js";
import { questionIdValidation } from "../middlewares/global.middleware.js";

const routes = Router();

routes.post("/", store);
routes.get("/", index);
routes.get("/:id", questionIdValidation, show);
routes.patch("/:id", questionIdValidation, update);
routes.delete("/:id", questionIdValidation, deleted);

export default routes;
