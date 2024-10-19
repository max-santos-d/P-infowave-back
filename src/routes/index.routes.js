import { Router } from 'express';

import userRoutes from './user.routes.js';
import userTypeRoutes from './userType.routes.js';
import postRoutes from './post.routes.js';
import postLikeRoutes from './postLike.routes.js';
import postMessageRoutes from './postMessage.routes.js';
import questionRoutes from './question.routes.js';
import questionLikeRoutes from './questionLike.routes.js';
import questionMessageRoutes from './questionMessage.routes.js';
import authRoutes from './auth.routes.js';
import questionSearchByUserRoutes from './questionSearchByUser.routes.js';
import admReqForUsersRoutes from './admReqForUser.routes.js';
import admReqForPostRoutes from './admReqForPost.routes.js';
import admReqForQuestionRoutes from './admReqForQuestion.routes.js';
import reportRouters from './report.routes.js';

const router = Router();

// auth
router.use('/auth', authRoutes);

// user
router.use('/user', userRoutes);
router.use('/userType', userTypeRoutes);

// post
router.use('/post', postRoutes);
router.use('/postLike', postLikeRoutes);
router.use('/postMessage', postMessageRoutes);

// question
router.use('/question', questionRoutes);
router.use('/questionLike', questionLikeRoutes);
router.use('/questionMessage', questionMessageRoutes);
router.use('/questionSearchByUser', questionSearchByUserRoutes);

//adm request
router.use('/admReqForUsers', admReqForUsersRoutes);
router.use('/admReqForPost', admReqForPostRoutes);
router.use('/admReqForQuestion', admReqForQuestionRoutes);

//report request
router.use('/report', reportRouters);

export default router;
