import express from 'express';
import getTime from '../controllers/time';
import getEndpoints from '../controllers/endpoints';

const router = express.Router();

router.get('/', getEndpoints);
router.get('/time', getTime);

export default router;
