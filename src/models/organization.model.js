'use strict';

const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    deletedAt: {
        type: Number,
    },
    createdAt: {
        type: Number,
        default: new Date().getTime(),
    },
    updatedAt: {
        type: Number,
        default: new Date().getTime(),
    },
});

module.exports = model('Organization', schema);
