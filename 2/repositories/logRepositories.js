const { logs } = require('../models')

module.exports = {
    createLogs: async (API, params) => {
        const log = await logs.create({
            APIendpoint: API,
            parameters: JSON.stringify(params)
        })
        return log;
    },
}
