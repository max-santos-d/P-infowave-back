import { Router } from "express";

import { index, update } from "../controller/postLike.controller.js";
import { postIdValidation } from "../middlewares/global.middleware.js";

const routes = Router();

routes.get("/", index);
routes.patch("/:id", postIdValidation, update);

export default routes;
