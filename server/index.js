import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import bookRoutes from './routes/BookRoutes';
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;

app.use('/resfulApi/books', bookRoutes);

app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to this API.'
}));
app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});
export default app;