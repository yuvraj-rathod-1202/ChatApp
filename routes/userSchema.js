const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    gender: String,
    age: Number,
    country: String
})

const messageSchema = new Schema({
    message: String
})

const senddata = mongoose.model('senddata', userSchema);
const messagedata = mongoose.model('message', messageSchema);
module.exports = { senddata, messagedata };