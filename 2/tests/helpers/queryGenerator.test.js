const { queryGenerator } = require('../../helpers')

describe('funtion test queryGenerator', () => {
    it('should return an Object of translated query from movie_title become t when isSearch are false', () => {
        const querySent = { movie_title: 'batman' };
        const queryExpected = { t: 'batman' };
        const result = queryGenerator(querySent);

        expect(result).toMatchObject(queryExpected);
    });

    it('should return an Object of translated query from movie_title become s when isSearch are true', () => {
        const querySent = { movie_title: 'batman' };
        const queryExpected = { s: 'batman' };
        const result = queryGenerator(querySent, true);

        expect(result).toMatchObject(queryExpected);
    });

    it('should return an Object of translated query from imdb_id become i', () => {
        const querySent = { imdb_id: 'batman' };
        const queryExpected = { i: 'batman' };
        const result = queryGenerator(querySent);

        expect(result).toMatchObject(queryExpected);
    });

    it('should return an Object of translated query from movie_type become type', () => {
        const querySent = { movie_type: 'batman' };
        const queryExpected = { type: 'batman' };
        const result = queryGenerator(querySent);

        expect(result).toMatchObject(queryExpected);
    });

    it('should return an Object of translated query from year become y', () => {
        const querySent = { year: 'batman' };
        const queryExpected = { y: 'batman' };
        const result = queryGenerator(querySent);

        expect(result).toMatchObject(queryExpected);
    });

    it('should return an Object of translated query from plot become plot', () => {
        const querySent = { plot: 'batman' };
        const queryExpected = { plot: 'batman' };
        const result = queryGenerator(querySent);

        expect(result).toMatchObject(queryExpected);
    });

    it('should return an Object of translated query from data_type become r', () => {
        const querySent = { data_type: 'batman' };
        const queryExpected = { r: 'batman' };
        const result = queryGenerator(querySent);

        expect(result).toMatchObject(queryExpected);
    });

    it('should return an Object of translated query from page become page', () => {
        const querySent = { page: 'batman' };
        const queryExpected = { page: 'batman' };
        const result = queryGenerator(querySent);

        expect(result).toMatchObject(queryExpected);
    });
})