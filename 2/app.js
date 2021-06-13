'use strict'

// require('dotenv').config()
require(`module-alias/register`);
const router = require('./routes/index.js')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)


module.exports = app