'use strict';

const ROUTE_PERMISSIONS = require('../config/permissions/index');
const Errors = require('../errors');

function normalizeRoute(path) {
    const isIdSegment = (segment) =>
        segment.match(/^[a-f0-9-]{36}$/i) || segment.match(/^[a-z]+_[a-z0-9]+$/i);

    return path
        .split('/')
        .map((segment) => (isIdSegment(segment) ? ':id' : segment))
        .join('/');
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

    const permissionsToCheck = Array.isArray(requiredPermission)
        ? requiredPermission
        : [requiredPermission];

    const hasPermission = permissionsToCheck.some((required) =>
        userPermissions.some((permission) => {
            if (permission.resource === required.resource) {
                if (required.access === 'W') {
                    return permission.accessType === 'W';
                }
                return permission.accessType === 'R' || permission.accessType === 'W';
            }
            return false;
        })
    );

    if (!hasPermission) {
        const error = new Errors.ForbiddenError(
            'You do not have permission to perform this action'
        );
        return res.status(error.statusCode).send(error);
    }

    next();
}

module.exports = authorize;
