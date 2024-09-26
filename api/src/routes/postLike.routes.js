import { Router } from "express";

import { index, update } from "../controller/postLike.controller.js";
import { postIdValidation } from "../middlewares/global.middleware.js";
import { authChekerMiddleware } from "../middlewares/auth.middleware.js";

const routes = Router();

// auth
routes.use(authChekerMiddleware);
routes.get("/", index);
routes.patch("/:id", postIdValidation, update);

export default routes;
