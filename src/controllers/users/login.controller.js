'use strict';

const BaseController = require('../base-controller');
const Errors = require('./../../errors');
const User = require('./../../models/user.model');
const UserMapper = require('../../mappers/user.mapper');

const bcrypt = require('bcrypt');
const config = require('./../../../config');
const jwt = require('jsonwebtoken');

const mappingFilter = ['createdAt', 'password', 'updatedAt'];

class LoginController extends BaseController {
    static async perform(email, password) {
        try {
            const user = new UserMapper(
                await User.findOne({ email, deletedAt: undefined })
            );

            if (!user) {
                throw new Errors.ResourceNotFoundError('user', email);
            }

            const result = await bcrypt.compare(password, user.password);

            if (!result) {
                throw new Errors.AuthenticationFailureError();
            }

            const sessionData = {};

            for (const [key, _] of Object.entries(user)) {
                if (!mappingFilter.includes(key)) {
                    sessionData[key] = user[key];
                }
            }

            return jwt.sign(sessionData, config.encryption.jwtToken, {
                expiresIn: config.encryption.jwtExpiration,
            });
        } catch (_error) {
            throw new Errors.InternalServerError();
        }
    }
}

module.exports = LoginController;
