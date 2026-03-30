'use strict';

const { RESOURCES, ACCESS_TYPES } = require('../../utils/constants');

const reportsPermissions = {
    'POST /v1/invoice': {
        resource: RESOURCES.PATIENT_INVOICE,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/invoice/:id': {
        resource: RESOURCES.PATIENT_INVOICE,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/invoice/case/:caseId': {
        resource: RESOURCES.PATIENT_INVOICE,
        access: ACCESS_TYPES.READ,
    },
    'POST /v1/payment': {
        resource: RESOURCES.PATIENT_INVOICE,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/payments/case/:caseId': {
        resource: RESOURCES.PATIENT_INVOICE,
        access: ACCESS_TYPES.READ,
    },
};

module.exports = reportsPermissions;
