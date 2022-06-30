const { db, DataTypes } = require('../utils/dataBase.util');

//create Historical model
const Historical = db.define('historical', {
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

module.exports = { Historical }