const { db, DataTypes } = require('../utils/dataBase.util')

//create Lastest model
const Lastest = db.define('lastest', {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    value: {
        allowNull: false,
        type: DataTypes.DECIMAL
    }
})

module.exports = { Lastest }