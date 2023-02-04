import { Request, Response } from 'express';

const getMetrics = (req: Request, res: Response) => {
    console.log('getMetrics called');
    res.status(200).send({ message: 'Metrics endpoint hit' });
};

export default getMetrics;
