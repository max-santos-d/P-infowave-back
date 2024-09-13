import { Router } from "express";

import userRoutes from "./user.routes.js";
import userTypeRoutes from "./userType.routes.js";

const router = Router();

router.use("/user", userRoutes);
router.use("/userType", userTypeRoutes);

export default router;
