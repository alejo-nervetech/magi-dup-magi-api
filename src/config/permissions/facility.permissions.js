'use strict';

const { RESOURCES, ACCESS_TYPES } = require('../../utils/constants');

const facilityPermissions = {
    'POST /v1/facility': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/facilities': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/facility/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/facility/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/facility/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/department': {
        resource: RESOURCES.DEPARTMENTS,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/facilities/:facilityId/departments': {
        resource: RESOURCES.DEPARTMENTS,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/department/:id': {
        resource: RESOURCES.DEPARTMENTS,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/department/:id': {
        resource: RESOURCES.DEPARTMENTS,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/department/:id': {
        resource: RESOURCES.DEPARTMENTS,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/ward': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/departments/:departmentId/wards': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/facilities/:facilityId/wards': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/ward/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/ward/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/ward/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/room': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/wards/:wardId/rooms': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/room/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/room/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/room/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/bed': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/rooms/:roomId/beds': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/bed/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/bed/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/bed/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },

    'GET /v1/dashboard/beds/summary': {
        resource: RESOURCES.DASHBOARD,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/dashboard/visits/monthly': {
        resource: RESOURCES.DASHBOARD,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/dashboard/admissions/today': {
        resource: RESOURCES.DASHBOARD,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/dashboard/distribution': {
        resource: RESOURCES.DASHBOARD,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/dashboard/wards/summary': {
        resource: RESOURCES.DASHBOARD,
        access: ACCESS_TYPES.READ,
    },
};

module.exports = facilityPermissions;
