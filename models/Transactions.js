const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const { commonColumns } = require('../constants/dbConstants');
const { ref } = require('..');

const Transactions = sequelize.define('Transactions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    credit: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
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
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, commonColumns);

module.exports = User;
