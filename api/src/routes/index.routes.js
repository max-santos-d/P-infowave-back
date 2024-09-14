import { Router } from "express";

import userRoutes from "./user.routes.js";
import userTypeRoutes from "./userType.routes.js";
import postRoutes from "./post.routes.js";
import postLikeRoutes from "./postLike.routes.js";
import postMessageRoutes from "./postMessage.routes.js";

const router = Router();

// user
router.use("/user", userRoutes);
router.use("/userType", userTypeRoutes);

// post
router.use("/post", postRoutes);
router.use("/postLike", postLikeRoutes);
router.use("/postMessage", postMessageRoutes);

export default router;
