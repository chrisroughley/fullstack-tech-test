import { Request, Response } from 'express';

const getTime = (req: Request, res: Response) => {
    console.log('getTime called');
    const currentTime = Date.now();
    res.status(200).send({ epoch: currentTime });
};

export default getTime;
