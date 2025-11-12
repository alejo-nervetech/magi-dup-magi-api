'use strict';

const BaseError = require('./base.error');
const AuthenticationFailureError = require('./authentication-failure.error');
const ForbiddenError = require('./forbidden.error');

module.exports = {
    BaseError,
    AuthenticationFailureError,
    ForbiddenError,
};
