'use strict';

const responseList = require(`../config/response.json`);

/**
 * Standard Express Responses.
 *
 * @param {json} res express response
 * @param {string} code custom status code
 * @param {json} data return data
 * @param {json} input additonal input
 *
 * @return {json} {error, code, message, data}
 */
module.exports = async (res, code, data, keys) => {
  try {
    const status = responseList.find(status => status.code === code);
    if (code && !status) return res.status(404).json({ code: `not found`, message: `Status with code ${code} is not Found.`, data });

    if (status.status_code >= 300 && data) {
      if (data.message) {
        console.error(`Error Message: `, data.message);
      }
    }

    if (!data) data = { message: status.message, data: null };

    return res.status(status.status_code).json({ code: status.code, message: status.message, data: data });
  } catch (error) {
    console.error(error);
  }
};
