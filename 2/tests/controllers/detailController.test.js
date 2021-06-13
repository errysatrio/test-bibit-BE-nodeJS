// require('dotenv').config()

const request = require('supertest');
const app = require('../../app');
const server = app.listen(3000)
const url = '/api/detail';

// beforeAll(() => );
afterAll(() => server.close())
describe('endpoint /api/detail', () => {
    it("should return 200 and movie's details", async () => {
        // const getMovieDetailsBySpy = jest
        // .spyOn()
        const querySent = 'movie_title=batman';
        const expected = { Title: 'Batman' }
        const res = await request(app).get(`${url}?${querySent}`);

        expect(res.status).toEqual(200)
        expect(res.body.message).toBe('success get movie(s) search')
        expect(res.body.data).toMatchObject(expected)
    });
    
    it("should return 400 with msg Incorrect IMDb ID.", async () => {
        const res = await request(app).get(`${url}?`);

        expect(res.status).toEqual(400)
        expect(res.body.message).toBe('fail get movie(s) search')
        expect(res.body.data).toBe('Incorrect IMDb ID.')
    });
})