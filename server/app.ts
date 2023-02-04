import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ msg: 'API running...' });
});

export default app;
