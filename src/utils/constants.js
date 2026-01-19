'use strict';

const RESOURCES = {
    ROLE: 'role',
    PATIENT_VITALS: 'patient_vitals',
    PATIENT_INFORMATION: 'patient_information',
    DOCTOR_ORDERS: 'doctor_orders',
    DIAGNOSIS_PROGNOSIS: 'diagnosis_prognosis',
    SYSTEM_USER: 'system_user',
    INFRASTRUCTURE: 'infrastructure',
    REQUISITION: 'requisition',
    REQUISITION_APPROVAL: 'requisition_approval',
};

const ACCESS_TYPES = {
    READ: 'R',
    WRITE: 'W',
};

module.exports = {
    RESOURCES,
    ACCESS_TYPES,
};
