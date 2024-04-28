const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const { commonColumns } = require('./../constants/dbConstants')

console.log(commonColumns)

const User = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
         type: DataTypes.STRING,
         allowNull: false
    },
}, commonColumns);

module.exports = User;
