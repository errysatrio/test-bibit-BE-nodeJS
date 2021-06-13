// require('dotenv').config()

const request = require('supertest');
const app = require('../../app');
const server = app.listen(3000)
const url = '/api/search';
afterAll(() => server.close())

// beforeAll(() => console.log('before all'));

describe('endpoint /api/search', () => {
    it('success hit should return 200 get movies lists', async () => {
        const querySent = 'movie_title=batman';
        const expectedData = { Title: 'Batman'};
        const expectedMessage = 'success get movie(s) search';
        const res = await request(app).get(`${url}?${querySent}`);

        expect(res.status).toEqual(200)
        expect(res.body.message).toBe(expectedMessage)
        expect(res.body.data).toMatchObject(expectedData)
    });

    it('movie not found, should return 400', async () => {
        const querySent = 'movie_title=batasdasdman'
        const expectedMessage = 'fail get movie(s) search';
        const res = await request(app).get(`${url}?${querySent}`)
        
        expect(res.status).toEqual(400)
        expect(res.body.message).toBe(expectedMessage)
    });
})