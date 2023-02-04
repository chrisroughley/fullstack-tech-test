import { Request, Response } from 'express';

const getEndpoints = (req: Request, res: Response) => {
    console.log('getEndpoints called');
    res.status(200).send({ message: 'Endpoints endpoint hit' });
};

export default getEndpoints;
