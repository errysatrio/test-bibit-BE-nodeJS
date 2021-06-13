require('dotenv').config()

const { DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_USERNAME  } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": DB_DIALECT
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": DB_DIALECT
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": DB_DIALECT
  }
}

// module.exports = {
//   "development": {
//     "username": process.env.DB_USERNAME,
//     "password": process.env.DB_PASSWORD,
//     "database": process.env.DB_DATABASE,
//     "host": process.env.DB_HOST,
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": process.env.DB_USERNAME,
//     "password": process.env.DB_PASSWORD,
//     "database": process.env.DB_DATABASE,
//     "host": process.env.DB_HOST,
//     "dialect": "mysql"
//   }
// }
