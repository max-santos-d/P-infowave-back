import { Router } from "express";

import {
  deleted,
  index,
  show,
  store,
  update,
} from "../controller/user.controller.js";
import { userIdValidation } from "../middlewares/global.middleware.js";
import { authChekerMiddleware } from "../middlewares/auth.middleware.js";

const routes = Router();

routes.get("/", index);
routes.get("/:id", userIdValidation, show);

routes.use(authChekerMiddleware);
routes.post("/", store);
routes.patch("/:id", userIdValidation, update);
routes.delete("/:id", userIdValidation, deleted);

export default routes;
