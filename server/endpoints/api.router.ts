import express from 'express';
import getMetrics from './metrics';
import getTime from './time';
import getEndpoints from './endpoints';

const router = express.Router();

router.get('/api', getEndpoints);
router.get('/time', getTime);
router.get('/metrics', getMetrics);

export default router;
