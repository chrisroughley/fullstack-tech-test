import express from 'express';
import getTime from '../controllers/time.controller';
import getEndpoints from '../controllers/endpoints.controller';

const router = express.Router();

router.get('/', getEndpoints);
router.get('/time', getTime);

export default router;
