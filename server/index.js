import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todoRoutes';
import serverless from 'serverless-http';

dotenv.config();
export const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;

app.use('/resfulApi/todo', todoRoutes);

app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to this API.'
}));
app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});
export const handler=serverless(app);