'use strict';

const { RESOURCES, ACCESS_TYPES } = require('../../utils/constants');

const patientPermissions = {
    'POST /v1/patient': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/patients': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/patient/:id': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/patient/:id': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/patient/:id': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/case': {
        resource: RESOURCES.CASE_REGISTRY,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/cases': {
        resource: RESOURCES.CASE_REGISTRY,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/case/:id': {
        resource: RESOURCES.CASE_REGISTRY,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/patient/:id/cases': {
        resource: RESOURCES.CASE_REGISTRY,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/case/:id': {
        resource: RESOURCES.CASE_REGISTRY,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/case/:id': {
        resource: RESOURCES.CASE_REGISTRY,
        access: ACCESS_TYPES.WRITE,
    },

    'GET /v1/case/:id/doctors': {
        resource: RESOURCES.CASE_REGISTRY,
        access: ACCESS_TYPES.READ,
    },
    'POST /v1/case/:id/doctors': {
        resource: RESOURCES.CASE_REGISTRY,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/case/:id/doctor/:id': {
        resource: RESOURCES.CASE_REGISTRY,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/informant': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.WRITE,
    },
    'PUT /v1/informant/:id': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/informant/:id': {
        resource: RESOURCES.PATIENT_RECORDS,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/vital': {
        resource: RESOURCES.PATIENT_VITALS,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/vitals': {
        resource: RESOURCES.PATIENT_VITALS,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/vital/:id': {
        resource: RESOURCES.PATIENT_VITALS,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/case/:id/vitals': {
        resource: RESOURCES.PATIENT_VITALS,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/patient/:id/vitals': {
        resource: RESOURCES.PATIENT_VITALS,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/vital/:id': {
        resource: RESOURCES.PATIENT_VITALS,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/vital/:id': {
        resource: RESOURCES.PATIENT_VITALS,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/patient-diet': {
        resource: RESOURCES.PATIENT_DIET,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/patient-diets': {
        resource: RESOURCES.PATIENT_DIET,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/patient-diet/:id': {
        resource: RESOURCES.PATIENT_DIET,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/case/:id/patient-diet': {
        resource: RESOURCES.PATIENT_DIET,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/patient-diet/:id': {
        resource: RESOURCES.PATIENT_DIET,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/patient-diet/:id': {
        resource: RESOURCES.PATIENT_DIET,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/service-type': {
        resource: RESOURCES.SYSTEM_SETTINGS,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/service-types': {
        resource: RESOURCES.SYSTEM_SETTINGS,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/service-type/:id': {
        resource: RESOURCES.SYSTEM_SETTINGS,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/service-type/:id': {
        resource: RESOURCES.SYSTEM_SETTINGS,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/service-type/:id': {
        resource: RESOURCES.SYSTEM_SETTINGS,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/service-type/:id/sub-service-type': {
        resource: RESOURCES.SYSTEM_SETTINGS,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/service-type/:id/sub-service-types': {
        resource: RESOURCES.SYSTEM_SETTINGS,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/service-type/:id/sub-service-type/:id': {
        resource: RESOURCES.SYSTEM_SETTINGS,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/service-type/:id/sub-service-type/:id': {
        resource: RESOURCES.SYSTEM_SETTINGS,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/service-type/:id/sub-service-type/:id': {
        resource: RESOURCES.SYSTEM_SETTINGS,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/transfer-order': {
        resource: RESOURCES.TRANSFERS,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/transfer-orders': {
        resource: RESOURCES.TRANSFERS,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/transfer-order/:id': {
        resource: RESOURCES.TRANSFERS,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/transfer-order/:id': {
        resource: RESOURCES.TRANSFERS,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/transfer-order/:id': {
        resource: RESOURCES.TRANSFERS,
        access: ACCESS_TYPES.WRITE,
    },

    'POST /v1/charge': {
        resource: RESOURCES.PATIENT_CHARGES,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/charges': {
        resource: RESOURCES.PATIENT_CHARGES,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/charge/:id': {
        resource: RESOURCES.PATIENT_CHARGES,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/case/:id/charges': {
        resource: RESOURCES.PATIENT_CHARGES,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/case/:id/charges/summary': {
        resource: RESOURCES.PATIENT_CHARGES,
        access: ACCESS_TYPES.READ,
    },
    'PUT /v1/charge/:id': {
        resource: RESOURCES.PATIENT_CHARGES,
        access: ACCESS_TYPES.WRITE,
    },
    'PUT /v1/charge/:id/void': {
        resource: RESOURCES.PATIENT_CHARGES,
        access: ACCESS_TYPES.WRITE,
    },
    'DELETE /v1/charge/:id': {
        resource: RESOURCES.PATIENT_CHARGES,
        access: ACCESS_TYPES.WRITE,
    },
};

module.exports = patientPermissions;
