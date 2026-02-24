'use strict';

const { RESOURCES, ACCESS_TYPES } = require('../../utils/constants');

const guarantorPermissions = {
    'POST /v1/hmo': {
        resource: RESOURCES.HMO_PROVIDERS,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/hmos/:id': {
        resource: RESOURCES.HMO_PROVIDERS,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/hmo/:id': {
        resource: RESOURCES.HMO_PROVIDERS,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/hmo/:id': {
        resource: RESOURCES.HMO_PROVIDERS,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/guarantor': {
        resource: RESOURCES.HMO_GUARANTORS,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/guarantors/:id': {
        resource: RESOURCES.HMO_GUARANTORS,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/guarantor/:id': {
        resource: RESOURCES.HMO_GUARANTORS,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/guarantor/:id': {
        resource: RESOURCES.HMO_GUARANTORS,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/patient-hmo-card': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.WRITE,
    },
    'POST /v1/patient-hmo-cards/bulk': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/patient-hmo-cards': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/patient-hmo-card/:id': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/patient-hmo-card/:id': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/patient-guarantor': {
        resource: RESOURCES.PATIENT_GUARANTORS,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/patient-guarantors': {
        resource: RESOURCES.PATIENT_GUARANTORS,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/patient-guarantor/:id': {
        resource: RESOURCES.PATIENT_GUARANTORS,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/patient-guarantor/:id': {
        resource: RESOURCES.PATIENT_GUARANTORS,
        access: ACCESS_TYPES.WRITE,
    },
};

module.exports = guarantorPermissions;
