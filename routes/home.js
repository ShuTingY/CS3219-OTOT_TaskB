import express from 'express';

const router = express.Router();

router.route('/').get((req, res) => res.send({ message: 'Welcome to the Restful Api using express and postgre' }));

export default router;
