const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: String,
    age: Number,
    country: String
});

const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'senddata',  // references the user schema
        required: true
    },
    message: {
        type: String,
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'senddata',  // references the user schema
        required: true
    }
});

const senddata = mongoose.model('senddata', userSchema);
const messagedata = mongoose.model('messages', messageSchema);

module.exports = { senddata, messagedata };
