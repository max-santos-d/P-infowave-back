import { Router } from "express";

import {
  index,
  show,
  store,
  update,
  deleted,
} from "../controller/post.controller.js";

const routes = Router();

routes.post("/:id", store);
routes.get("/", index);
routes.get("/:id", show);
routes.patch("/:id", update);
routes.delete("/:id", deleted);

export default routes;
