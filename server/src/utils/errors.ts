import { Request, Response } from 'express';

const handleBadUrls = (req: Request, res: Response) => {
    res.status(404).send({ message: 'Route not found' });
};

export default handleBadUrls;
