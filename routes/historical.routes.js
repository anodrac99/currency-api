const express = require('express')

const historicalRouter = express.Router()

//controller
const { getHistorical, createHistorical } = require('../controllers/historical.controllers')

historicalRouter.get('/', getHistorical)

historicalRouter.post('/', createHistorical)

module.exports = { historicalRouter }