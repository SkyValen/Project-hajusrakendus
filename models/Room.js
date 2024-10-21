const { DataTypes } = require('sequelize');
const db = require('../config/database.js');

const Room = db.define('Room', {
    number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
});

module.exports = Room