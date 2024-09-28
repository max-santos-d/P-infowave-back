import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';

import conectDatabase from './src/database/db.js';
import router from './src/routes/index.routes.js';

configDotenv();
await conectDatabase();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export default app;
