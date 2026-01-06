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

    'POST /v1/vital': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'GET /v1/vitals': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'GET /v1/vital/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'GET /v1/case/:caseId/vitals': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'GET /v1/patient/:patientId/vitals': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'PUT /v1/vital/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/vital/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },

    'POST /v1/service-type': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'GET /v1/service-types': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'GET /v1/service-type/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'PUT /v1/service-type/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/service-type/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },

    'POST /v1/service-type/:serviceTypeId/sub-service-type': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'GET /v1/service-type/:serviceTypeId/sub-service-types': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'GET /v1/service-type/:serviceTypeId/sub-service-type/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'PUT /v1/service-type/:serviceTypeId/sub-service-type/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/service-type/:serviceTypeId/sub-service-type/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },

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

    'POST /v1/transfer-order': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'GET /v1/transfer-orders': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'GET /v1/transfer-order/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'PUT /v1/transfer-order/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/transfer-order/:id': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },

    'GET /v1/dashboard/beds/summary': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'GET /v1/dashboard/visits/monthly': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'GET /v1/dashboard/admissions/today': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'GET /v1/dashboard/distribution': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },
    'GET /v1/dashboard/wards/summary': { resource: RESOURCES.INFRASTRUCTURE, access: ACCESS_TYPES.READ },

    'POST /v1/hmo': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'GET /v1/hmos/:orgId': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'PUT /v1/hmo/:hmoId': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/hmo/:hmoId': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },

    'POST /v1/guarantor': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'GET /v1/guarantors/:orgId': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.READ },
    'PUT /v1/guarantor/:guarantorId': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
    'DELETE /v1/guarantor/:guarantorId': { resource: RESOURCES.PATIENT_INFORMATION, access: ACCESS_TYPES.WRITE },
};

module.exports = ROUTE_PERMISSIONS;
