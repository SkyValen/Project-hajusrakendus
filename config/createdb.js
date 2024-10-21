const db = require('./database.js');

const User = require('../models/User.js');
const Room = require('../models/Room.js');
const Booking = require('../models/Booking.js');

db.sync({force: true})