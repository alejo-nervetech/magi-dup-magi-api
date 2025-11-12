'use strict';

const BaseError = require('./base.error');

class AuthenticationFailureError extends BaseError {
    constructor(message = 'Invalid credentials') {
        super(message);
        this.statusCode = 401;
        this.details = {
            code: 'authentication_failure',
        };
    }
}

module.exports = AuthenticationFailureError;
