import express from 'express';
import cors from 'cors';

import { imagesRouter, usersRouter, postRouter } from './routes';

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(cors());
app.use(imagesRouter, usersRouter, postRouter);

export { app };
