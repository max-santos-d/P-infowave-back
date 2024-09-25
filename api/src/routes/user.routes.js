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

routes.post("/", store);
routes.get("/", index);
routes.get("/:id", userIdValidation, show);

routes.use(authChekerMiddleware);
routes.patch("/", update);
routes.delete("/", deleted);

export default routes;
