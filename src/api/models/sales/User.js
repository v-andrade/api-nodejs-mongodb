const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    app: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    type_id: {
        type: Number,
        required: true,
    },
    company_id: {
        type: Number,
        required: true
    },
    locale: {
        type: String,
        required: true,
    },
    updated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Users', UsersSchema);