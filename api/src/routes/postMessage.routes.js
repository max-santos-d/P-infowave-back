import { Router } from "express";

const routes = Router();

import { postIdValidation } from "../middlewares/global.middleware.js";
import { deleted, index, store } from "../controller/postMessage.controller.js";

routes.post("/:id", postIdValidation, store);
routes.get("/:id", postIdValidation, index);
routes.delete("/:id", postIdValidation, deleted);

export default routes;
