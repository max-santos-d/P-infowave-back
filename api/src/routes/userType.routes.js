import { Router } from "express";

import { update, index, show, deleted } from "../controller/userType.controller.js";

const routes = Router();

routes.get("/", index);
routes.get("/:id", show);
routes.patch("/:id", update);
routes.delete("/:id", deleted);

export default routes;
