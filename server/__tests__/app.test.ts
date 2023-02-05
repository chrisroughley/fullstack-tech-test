import request from 'supertest';
import app from '../app';

const token = 'mysecrettoken';
const endpoints = {
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

describe('Authorization header', () => {
    test('Responds with status 403 - Invalid credentials when no authorization header is supplied', async () => {
        const response = await request(app).get('/').expect(403);
        expect(response.body.error).toBe('Invalid credentials');
    });
    test('Responds with status 403 - Invalid credentials when an incorrect authorization header token is supplied', async () => {
        const response = await request(app)
            .get('/')
            .set({ authorization: 'apples' })
            .expect(403);
        expect(response.body.error).toBe('Invalid credentials');
    });
});

describe('Invalid URLs', () => {
    test('Responds with status 404 - Route not found for invalid URLs', async () => {
        const response = await request(app)
            .get('/bananas')
            .set({ authorization: token })
            .expect(404);
        expect(response.body.message).toBe('Route not found');
    });
});

describe('Valid URLs', () => {
    describe('GET /', () => {
        test('Responds with status 200 - API running...', async () => {
            const response = await request(app)
                .get('/')
                .set({ authorization: token })
                .expect(200);
            expect(response.body.message).toBe('API running...');
        });
    });
    describe('GET /api/time', () => {
        test('Responds with status 200 - Current server time', async () => {
            const response = await request(app)
                .get('/api/time')
                .set({ authorization: token })
                .expect(200);
            expect(typeof response.body.epoch).toBe('number');
        });
    });
    describe('GET /api/metrics', () => {
        test('Responds with status 200 - ', async () => {
            const response = await request(app)
                .get('/api/metrics')
                .set({ authorization: token })
                .expect(200);
            expect(typeof response.body).toBe('object');
        });
    });
    describe('GET /api', () => {
        test('Responds with status 200 - ', async () => {
            const response = await request(app)
                .get('/api')
                .set({ authorization: token })
                .expect(200);
            expect(response.body).toEqual({ endpoints });
        });
    });
});
