import express from 'express';
import cors from 'cors';

import { imagesRouter, usersRouter } from './routes';

const app = express();

app.use(express.urlencoded({ limit: '50mb' }));
app.use(express.json());
app.use(cors());
app.use(imagesRouter, usersRouter);

export { app };
