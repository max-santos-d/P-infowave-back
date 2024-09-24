import { Router } from "express";

import {
  index,
  show,
  store,
  update,
  deleted,
} from "../controller/post.controller.js";
import { postIdValidation } from "../middlewares/global.middleware.js";
import { authChekerMiddleware } from "../middlewares/auth.middleware.js";

const routes = Router();

routes.post("/", store);
routes.get("/", index);

routes.use(authChekerMiddleware);
routes.get("/:id", postIdValidation, show);
routes.patch("/:id", postIdValidation, update);
routes.delete("/:id", postIdValidation, deleted);

export default routes;
