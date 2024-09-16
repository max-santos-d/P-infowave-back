import { Router } from "express";
import { questionIdValidation } from "../middlewares/global.middleware.js";
import { index, update } from "../controller/questionLike.controller.js";

const routes = Router();

routes.get("/", index);
routes.patch("/:id", questionIdValidation, update);

export default routes;
