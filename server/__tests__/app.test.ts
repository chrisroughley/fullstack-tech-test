import request from 'supertest';
import app from '../app';

describe('Invalid URLs', () => {
    test('Responds with status 404 - Route not found', async () => {
        const response = await request(app).get('/bananas').expect(404);
        expect(response.body.message).toBe('Route not found');
    });
});
