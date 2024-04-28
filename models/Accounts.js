const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const { commonColumns } = require('./../constants/dbConstants')

console.log(commonColumns)

const Accounts = sequelize.define('Accounts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    account_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    available_balance: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    currency: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
    },
    user_balance: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, commonColumns);

module.exports = Accounts;
