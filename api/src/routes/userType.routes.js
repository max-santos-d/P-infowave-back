import { Router } from "express";

import { update, index, show, deleted } from "../controller/userType.controller.js";

const userTypeRoutes = Router();

userTypeRoutes.get("/", index);
userTypeRoutes.get("/:id", show);
userTypeRoutes.patch("/:id", update);
userTypeRoutes.delete("/:id", deleted);

export default userTypeRoutes;
