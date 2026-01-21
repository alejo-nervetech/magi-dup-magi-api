'use strict';

const { RESOURCES, ACCESS_TYPES } = require('../../utils/constants');

const guarantorPermissions = {
    'POST /v1/hmo': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/hmos/:orgId': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/hmo/:hmoId': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/hmo/:hmoId': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/guarantor': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/guarantors/:orgId': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/guarantor/:guarantorId': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/guarantor/:guarantorId': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/patient-guarantor': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/patient-guarantors': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/patient-guarantor/:patientGuarantorId': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/patient-guarantor/:patientGuarantorId': {
        resource: RESOURCES.PATIENT_INFORMATION,
        access: ACCESS_TYPES.WRITE,
    },
};

module.exports = guarantorPermissions;
