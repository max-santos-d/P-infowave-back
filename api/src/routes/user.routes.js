import { Router } from "express";

import {deleted, index, show, store, update} from '../controller/user.controller.js';

const userRoutes = Router();

userRoutes.post("/", store);
userRoutes.get("/", index);
userRoutes.get("/:id", show);
userRoutes.patch("/:id", update);
userRoutes.delete("/:id", deleted);

export default userRoutes;
