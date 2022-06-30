const express = require('express')

const app = express()

//import routers
const { lastestRouter } = require('./routes/lastest.routes')
const { historicalRouter } = require('./routes/historical.routes')
const { default: helmet } = require('helmet')
const compression = require('compression')
const morgan = require('morgan')

//allow to use json
app.use(express.json())

//use routers
app.use('/api/v1/lastest', lastestRouter)
app.use('/api/v1/historical', historicalRouter)

app.use(helmet())
app.use(compression())

if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))
else app.use(morgan('combined'))

module.exports = { app }