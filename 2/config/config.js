require('dotenv').config()

const { 
  DB_DATABASE, 
  DB_DIALECT, 
  DB_HOST, 
  DB_PASSWORD, 
  DB_USERNAME  
} = process.env;

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
