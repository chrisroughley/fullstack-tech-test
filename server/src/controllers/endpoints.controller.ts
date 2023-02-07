import { Request, Response } from 'express';
import { EndpointMap } from '../types/types';

const endpoints: EndpointMap = {
    'GET /api': {
        description:
            'Server up a json representation of all available endpoints for the api',
    },
    'GET /api/metrics': {
        description:
            'Server up all available prometheus-format metrics for the api',
    },
    'GET /api/time': {
        description: 'Servers up current value of the server time',
        exampleResponse: {
            epoch: 1675538912,
        },
    },
};

const getEndpoints = (req: Request, res: Response) => {
    console.log('getEndpoints called');
    res.status(200).send({ endpoints });
};

export default getEndpoints;
