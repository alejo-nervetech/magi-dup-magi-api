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

        const activeDepartmentId = req.headers['x-active-department-id'];
        const departmentAssignments = decoded.departmentAssignments || [];

        let activeDepartmentData = null;
        let permissions = decoded.permissions || [];
        let roleId = decoded.roleId;
        let departmentId = decoded.departmentId;
        let roleName = decoded.role;

        if (departmentAssignments.length > 0) {
            if (activeDepartmentId) {
                activeDepartmentData = departmentAssignments.find(
                    (a) => a.departmentId === activeDepartmentId
                );
            }

            if (!activeDepartmentData) {
                activeDepartmentData = departmentAssignments[0];
            }

            if (activeDepartmentData) {
                permissions = activeDepartmentData.permissions || [];
                roleId = activeDepartmentData.roleId;
                departmentId = activeDepartmentData.departmentId;
                roleName = activeDepartmentData.roleName;
            }
        }

        const user = {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            organizationId: decoded.organizationId,
            facilityId: decoded.facilityId,
            departmentId: departmentId,
            roleId: roleId,
            role: {
                id: roleId,
                name: roleName,
                permissions: permissions,
            },
            departmentAssignments: departmentAssignments,
        };

        req.user = user;
        next();
    } catch (_error) {
        res.status(error.statusCode).send(error);
    }
}

module.exports = authenticate;
