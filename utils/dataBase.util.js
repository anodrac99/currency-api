const { Sequelize, DataTypes } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: process.env.DB,
    logging: false,
    dialectOptions: {
        ssl: {
            required: true,
            rejectUnauthorized: false
        }
    }
})

module.exports = { db, DataTypes}