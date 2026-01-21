'use strict';

const { RESOURCES, ACCESS_TYPES } = require('../../utils/constants');

const userPermissions = {
    'POST /v1/user/login': null,

    'POST /v1/user': {
        resource: RESOURCES.SYSTEM_USER,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/users': {
        resource: RESOURCES.SYSTEM_USER,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/user/:id': {
        resource: RESOURCES.SYSTEM_USER,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/user/:id': {
        resource: RESOURCES.SYSTEM_USER,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/user/:id': {
        resource: RESOURCES.SYSTEM_USER,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/role': { resource: RESOURCES.ROLE, access: ACCESS_TYPES.WRITE },
    'GET /v1/roles': { resource: RESOURCES.ROLE, access: ACCESS_TYPES.READ },
    'GET /v1/role/:id': { resource: RESOURCES.ROLE, access: ACCESS_TYPES.READ },
    'PUT /v1/role/:id': {
        resource: RESOURCES.ROLE,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/role/:id': {
        resource: RESOURCES.ROLE,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/permission': {
        resource: RESOURCES.ROLE,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/permission/:id': {
        resource: RESOURCES.ROLE,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/doctor-fee': {
        resource: RESOURCES.DOCTOR_ORDERS,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/doctor-fee/settings/:doctorId': {
        resource: RESOURCES.DOCTOR_ORDERS,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/doctor-fee/settings/:doctorId': {
        resource: RESOURCES.DOCTOR_ORDERS,
        access: ACCESS_TYPES.WRITE,
    },
};

module.exports = userPermissions;
