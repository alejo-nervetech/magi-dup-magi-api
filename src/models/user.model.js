'use strict';

const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    privilege: {
        enum: ['admin', 'vendor', 'franchiser', 'franchisee'],
        lowercase: true,
        type: String,
    },
    organizationId: {
        type: String,
    },
    birthdate: {
        type: Number,
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

module.exports = model('User', schema);
