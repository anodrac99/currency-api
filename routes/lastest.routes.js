const express = require('express')

const lastestRouter = express.Router()

//controller
const { getLastest, createLastest } = require('../controllers/lastest.controllers')

lastestRouter.get('/', getLastest)

lastestRouter.post('/', createLastest)

module.exports = { lastestRouter }