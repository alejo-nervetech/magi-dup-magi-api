'use strict';

const BaseError = require('./base.error');

class ForbiddenError extends BaseError {
    constructor(message = 'You do not have permission to perform this action') {
        super(message);
        this.statusCode = 403;
        this.details = {
            code: 'forbidden',
        };
    }
}

module.exports = ForbiddenError;
