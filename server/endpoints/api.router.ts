import express from 'express';

const apiRouter = express.Router();

apiRouter.use('/time', getTime);
apiRouter.use('/metrics', getMetrics);

export default apiRouter;
