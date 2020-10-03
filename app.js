import dotenv from 'dotenv';
// for .env purpose
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { homeRouter } from './routes/';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: 'false' }));
app.use(morgan('dev'));
app.use(cors());


app.use('/resfulApi/', homeRouter);

export default app;
