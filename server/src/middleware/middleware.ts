import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const tokenAuthorization = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(req.headers);
    if (req.headers.authorization !== process.env.AUTHORIZATION_TOKEN) {
        return res.status(403).json({ error: 'Invalid credentials' });
    }
    return next();
};

export default tokenAuthorization;
