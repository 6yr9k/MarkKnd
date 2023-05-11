import express from 'express';
import * as http from 'http';
import cors from 'cors';
import { emailRouter } from '../routes';
import bodyParser from 'body-parser';

export const app = express();
export const serve = http.createServer(app);

app.use('/api', emailRouter);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
