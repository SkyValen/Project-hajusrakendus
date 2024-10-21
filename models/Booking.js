const { DataTypes } = require('sequelize');
const db = require('../config/database.js');

const Booking = db.define('Booking', {
    user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    room: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    startTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    endTime: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Booking;