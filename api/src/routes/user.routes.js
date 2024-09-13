import { Router } from "express";

import {
  deleted,
  index,
  show,
  store,
  update,
} from "../controller/user.controller.js";
import { userIdValidation } from "../middlewares/global.middleware.js";

const routes = Router();

routes.post("/", store);
routes.get("/", index);
routes.get("/:id", userIdValidation, show);
routes.patch("/:id", userIdValidation, update);
routes.delete("/:id", userIdValidation, deleted);

export default routes;
