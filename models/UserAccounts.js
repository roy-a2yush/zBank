const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const { commonColumns } = require('../constants/dbConstants');
const { ref } = require('..');

const UserAccounts = sequelize.define('UserAccounts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Accounts',
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, commonColumns);

module.exports = User;
