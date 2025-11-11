'use strict';

const Organization = require('../models/organization.model');
const OrganizationMapper = require('../mappers/organization.mapper');
const User = require('./../models/user.model');
const UserMapper = require('./../mappers/user.mapper');
const config = require('./../../config');
const { AuthenticationFailureError } = require('./../errors');

const jwt = require('jsonwebtoken');

async function retrieveTokenOwner(authorization) {
    const decodedAuthorization = jwt.verify(
        authorization,
        config.encryption.jwtToken
    );

    return await findUser(decodedAuthorization._id);
}

async function findUser(userId) {
    try {
        const user = new UserMapper(await User.findById(userId));

        if (user.isDeleted) {
            return {};
        }

        return user;
    } catch (_error) {
        return {};
    }
}

async function findOrganization(organizationId) {
    try {
        const organization = new OrganizationMapper(
            await Organization.findById(organizationId)
        );

        if (organization.isDeleted) {
            return {};
        }

        return organization;
    } catch (_error) {
        return {};
    }
}

module.exports = async (req, res, next) => {
    const error = new AuthenticationFailureError();

    try {
        const authorization = req.headers.authorization.split(' ')[1];

        const user = await retrieveTokenOwner(authorization);
        const organization = await findOrganization(user.organizationId);

        if (user) {
            user.organization = organization;
            req.cookies.user = user;

            next();
        } else {
            res.status(error.statusCode);
            res.send(error);
        }
    } catch (_error) {
        res.status(error.statusCode);
        res.send(error);
    }
};
