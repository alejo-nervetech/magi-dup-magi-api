'use strict';

const jwt = require('jsonwebtoken');
const config = require('../../config');
const Errors = require('../errors');

async function authenticate(req, res, next) {
    const error = new Errors.AuthenticationFailureError();

    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return res.status(error.statusCode).send(error);
        }

        const token = authorization.split(' ')[1];

        if (!token) {
            return res.status(error.statusCode).send(error);
        }

        const decoded = jwt.verify(token, config.encryption.jwt.jwtToken);

        const user = {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            organizationId: decoded.organizationId,
            facilityId: decoded.facilityId,
            roleId: decoded.roleId,
            role: {
                id: decoded.roleId,
                permissions: decoded.permissions || [],
            },
        };

        req.user = user;
        next();
    } catch (_error) {
        res.status(error.statusCode).send(error);
    }
}

module.exports = authenticate;
