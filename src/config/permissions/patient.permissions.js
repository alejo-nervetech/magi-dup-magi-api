'use strict';

const { RESOURCES, ACCESS_TYPES } = require('../../utils/constants');

const patientPermissions = {
    'POST /v1/patient': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/patients': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/patient/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/patient/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/patient/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/case': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/cases': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/case/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/patient/:patientId/cases': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/case/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/case/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/informant': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'PUT /v1/informant/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/informant/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/vital': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/vitals': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/vital/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/case/:caseId/vitals': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/patient/:patientId/vitals': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/vital/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/vital/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/service-type': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/service-types': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/service-type/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/service-type/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/service-type/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/service-type/:serviceTypeId/sub-service-type': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/service-type/:serviceTypeId/sub-service-types': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/service-type/:serviceTypeId/sub-service-type/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/service-type/:serviceTypeId/sub-service-type/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/service-type/:serviceTypeId/sub-service-type/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/transfer-order': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/transfer-orders': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/transfer-order/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/transfer-order/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/transfer-order/:id': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
};

module.exports = patientPermissions;
