'use strict';

const ROUTE_PERMISSIONS = require('../config/permissions/index');
const Errors = require('../errors');

function normalizeRoute(path) {
    return path.replace(/\/[^\/]+$/, (match) => {
        const segment = match.slice(1);
        if (segment.match(/^[a-f0-9-]{36}$/i) || segment.match(/^[a-z]+_[a-f0-9]+$/i)) {
            const paramName = segment.includes('_') ? segment.split('_')[0] + 'Id' : 'id';
            return `/:${paramName}`;
        }
        return match;
    }).replace(/\/[^\/]+\//, (match) => {
        const segment = match.slice(1, -1);
        if (segment.match(/^[a-f0-9-]{36}$/i) || segment.match(/^[a-z]+_[a-f0-9]+$/i)) {
            const paramName = segment.includes('_') ? segment.split('_')[0] + 'Id' : 'id';
            return `/:${paramName}/`;
        }
        return match;
    });
}

function authorize(req, res, next) {
    const normalizedPath = normalizeRoute(req.path);
    const routeKey = `${req.method} ${normalizedPath}`;

    const requiredPermission = ROUTE_PERMISSIONS[routeKey];

    if (requiredPermission === null) {
        return next();
    }

    if (!requiredPermission) {
        return next();
    }

    if (!req.user || !req.user.role || !req.user.role.permissions) {
        const error = new Errors.ForbiddenError(
            "The operation cannot be performed with the user's privilege"
        );
        return res.status(error.statusCode).send(error);
    }

    const userPermissions = req.user.role.permissions;

    const hasPermission = userPermissions.some((permission) => {
        if (permission.resource === requiredPermission.resource) {
            if (requiredPermission.access === 'W') {
                return permission.accessType === 'W';
            }
            return permission.accessType === 'R' || permission.accessType === 'W';
        }
        return false;
    });

    if (!hasPermission) {
        const error = new Errors.ForbiddenError(
            'You do not have permission to perform this action'
        );
        return res.status(error.statusCode).send(error);
    }

    next();
}

module.exports = authorize;
