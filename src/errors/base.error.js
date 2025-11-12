'use strict';

class BaseError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 500;
        this.message = message;
        this.details = {
            code: 'internal_server_error',
        };
    }
}

module.exports = BaseError;
