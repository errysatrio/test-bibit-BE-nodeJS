const { logs } = require('../models')

module.exports = {
    createLogs: async (API, params) => {
        try {
            const log = await logs.create({
                APIendpoint: API,
                parameters: JSON.stringify(params)
            })
            return log;
        } catch (error) {
            console.error(error)
            return error
        }
    },
}
