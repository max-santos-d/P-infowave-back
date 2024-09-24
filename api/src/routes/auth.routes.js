import { Router } from "express";

import { auth } from "../controller/auth.controller.js";

const routes = Router();

routes.post("/", auth);

export default routes;
