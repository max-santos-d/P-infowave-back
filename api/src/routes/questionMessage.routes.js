import { Router } from "express";
import { questionIdValidation } from "../middlewares/global.middleware.js";
import {
  deleted,
  index,
  store,
} from "../controller/questionMessage.controller.js";

const routes = Router();

routes.post("/:id", questionIdValidation, store);
routes.get("/:id", questionIdValidation, index);
routes.delete("/:id", questionIdValidation, deleted);

export default routes;
