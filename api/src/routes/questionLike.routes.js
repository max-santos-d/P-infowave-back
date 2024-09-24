import { Router } from "express";
import { questionIdValidation } from "../middlewares/global.middleware.js";
import { index, update } from "../controller/questionLike.controller.js";
import { authChekerMiddleware } from "../middlewares/auth.middleware.js";

const routes = Router();

routes.get("/", index);

routes.use(authChekerMiddleware);
routes.patch("/:id", questionIdValidation, update);

export default routes;
