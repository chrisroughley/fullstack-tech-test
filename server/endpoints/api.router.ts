import express from 'express';
import getMetrics from './metrics';
import getTime from './time';

const router = express.Router();

router.get('/time', getTime);
router.get('/metrics', getMetrics);

export default router;
