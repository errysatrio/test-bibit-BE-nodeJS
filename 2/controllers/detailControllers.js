'use strict'

const axios = require('axios');
const { response, queryGenerator } = require('../helpers');
const { logRepositories } = require('../repositories');
const { OMDB_API_KEY, OMDB_URL } = process.env;

module.exports =  {
    getDetail: async (req, res) => {
        try {
            const additionalQuery = queryGenerator(req.query);
            const newQuery = Object.entries(additionalQuery).map(value => value.join('=')).join('&');
            
            const url = `${OMDB_URL}/?apikey=${OMDB_API_KEY}&${newQuery}`
            const data = await axios({
                method: 'get',
                url,
            })

            if (data.data.Response === 'False') throw new Error(data.data.Error);

            await logRepositories.createLogs(url, additionalQuery);
            return response(res, 'success get movie(s) search', data.data)
        } catch (error) {
            return response(res, 'fail get movie(s) search', error.message)
        }
    }
}