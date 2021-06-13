// require('dotenv').config()

const request = require('supertest');
const app = require('../../app');
const server = app.listen(3000)
const url = '/api/search';
afterAll(() => server.close())

// beforeAll(() => console.log('before all'));

describe('endpoint /api/search', () => {
    it('should return 200 get movies lists', async () => {
        const querySent = 'movie_title=batman'
        const expected = { Title: 'Batman'}
        const res = await request(app).get(`${url}?${querySent}`)

        expect(res.status).toEqual(200)
        expect(res.body.message).toBe('success get movie(s) search')
        expect(res.body.data).toMatchObject(expected)
    });

    it('should return 400', async () => {
        const querySent = 'movie_title=batasdasdman'
        const expected = { Title: 'Batman'}
        const res = await request(app).get(`${url}?${querySent}`)

        expect(res.status).toEqual(400)
        expect(res.body.message).toBe('fail get movie(s) search')
        // expect(res.body.data).toMatchObject(expected)
    });
})