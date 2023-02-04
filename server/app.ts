import express from 'express';
import handleBadUrls from './utils/errors';
import apiRouter from './endpoints/api.router';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ msg: 'API running...' });
});

app.use('/api', apiRouter);

app.use('*', handleBadUrls);

export default app;
