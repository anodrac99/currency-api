const express = require('express')

const app = express()

const cors = require('cors')

//import routers
const { lastestRouter } = require('./routes/lastest.routes')
const { historicalRouter } = require('./routes/historical.routes')


const { default: helmet } = require('helmet')
const compression = require('compression')
const morgan = require('morgan')

const corsOptions={
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}

//deploy 
app.use(cors(corsOptions))
app.use(helmet())
app.use(compression())

//allow to use json
app.use(express.json())

//use routers
app.use('/api/v1/lastest', lastestRouter)
app.use('/api/v1/historical', historicalRouter)


if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))
else app.use(morgan('combined'))

module.exports = { app }