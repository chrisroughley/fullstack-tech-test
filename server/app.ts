import promMid from 'express-prometheus-middleware';
import express from 'express';
import handleBadUrls from './src/utils/errors';
import router from './src/routes/api.router';
import tokenAuthorization from './src/middleware/middleware';

const app = express();

app.use(tokenAuthorization);

app.use(
    promMid({
        metricsPath: '/api/metrics',
        collectDefaultMetrics: true,
        collectGCMetrics: true,
        requestDurationBuckets: [0.1, 0.5, 1, 1.5],
        requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
        responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    })
);

app.get('/', (req, res) => {
    res.status(200).send({ message: 'API running...' });
});

app.use('/api', router);

app.use('*', handleBadUrls);

export default app;
