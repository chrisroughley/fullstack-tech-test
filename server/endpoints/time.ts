import { Request, Response } from 'express';

const getTime = (req: Request, res: Response) => {
    console.log('getTime called');
    res.status(200).send({ message: 'Time endpoint hit' });
};

export default getTime;
