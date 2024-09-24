import { Router } from "express";

const routes = Router();

import { postIdValidation } from "../middlewares/global.middleware.js";
import { deleted, index, store } from "../controller/postMessage.controller.js";
import { authChekerMiddleware } from "../middlewares/auth.middleware.js";

routes.get("/:id", postIdValidation, index);

routes.use(authChekerMiddleware);
routes.post("/:id", postIdValidation, store);
routes.delete("/:id", postIdValidation, deleted);

export default routes;
