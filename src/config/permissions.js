'use strict';

const { RESOURCES, ACCESS_TYPES } = require('../utils/constants');

const ROUTE_PERMISSIONS = {
    'POST /v1/user/login': null,

    'POST /v1/user': { resource: RESOURCES.SYSTEM_USER, access: ACCESS_TYPES.WRITE },
    'GET /v1/users': { resource: RESOURCES.SYSTEM_USER, access: ACCESS_TYPES.READ },

    'POST /v1/role': { resource: RESOURCES.ROLE, access: ACCESS_TYPES.WRITE },
    'GET /v1/roles': { resource: RESOURCES.ROLE, access: ACCESS_TYPES.READ },
    'GET /v1/role/:id': { resource: RESOURCES.ROLE, access: ACCESS_TYPES.READ },
    'PUT /v1/role/:id': { resource: RESOURCES.ROLE, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/role/:id': { resource: RESOURCES.ROLE, access: ACCESS_TYPES.WRITE },

    'POST /v1/permission': { resource: RESOURCES.ROLE, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/permission/:id': { resource: RESOURCES.ROLE, access: ACCESS_TYPES.WRITE },

    'POST /v1/patient': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'GET /v1/patients': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'GET /v1/patient/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'PUT /v1/patient/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/patient/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },

    'POST /v1/case': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'GET /v1/cases': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'GET /v1/case/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'GET /v1/patient/:patientId/cases': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'PUT /v1/case/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/case/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },

    'POST /v1/informant': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'PUT /v1/informant/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/informant/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },

    'POST /v1/facility': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },
    'GET /v1/facilities': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'GET /v1/facility/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'PUT /v1/facility/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/facility/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },

    'POST /v1/department': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },
    'GET /v1/facilities/:facilityId/departments': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'GET /v1/department/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'PUT /v1/department/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/department/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },

    'POST /v1/ward': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },
    'GET /v1/departments/:departmentId/wards': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'GET /v1/ward/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'PUT /v1/ward/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/ward/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },

    'POST /v1/room': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },
    'GET /v1/wards/:wardId/rooms': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'GET /v1/room/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'PUT /v1/room/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/room/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },

    'POST /v1/bed': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },
    'GET /v1/rooms/:roomId/beds': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'GET /v1/bed/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'PUT /v1/bed/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/bed/:id': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.WRITE },
};

module.exports = ROUTE_PERMISSIONS;
