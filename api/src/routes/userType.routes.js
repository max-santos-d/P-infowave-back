import { Router } from "express";

import { update, index, show, deleted } from "../controller/userType.controller.js";
import {userIdValidation} from "../middlewares/global.middleware.js";

const routes = Router();

routes.get("/", index);
routes.get("/:id", userIdValidation, show);
routes.patch("/:id", userIdValidation, update);
routes.delete("/:id", userIdValidation, deleted);

export default routes;
